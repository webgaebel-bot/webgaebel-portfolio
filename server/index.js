import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json());

const requiredServerEnv = ['VITE_SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];

const missingServerEnv = requiredServerEnv.filter((key) => !process.env[key]);

const supabase =
  missingServerEnv.length === 0
    ? createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

const mailEnabled = Boolean(
  process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.CONTACT_NOTIFICATION_EMAIL
);

const transporter = mailEnabled
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

const requireSupabase = (res) => {
  if (supabase) return true;

  res.status(500).json({
    message:
      missingServerEnv.length > 0
        ? `Server configuration missing: ${missingServerEnv.join(', ')}`
        : 'Supabase is not configured.',
  });

  return false;
};

const sendNotificationEmail = async ({ subject, lines, replyTo }) => {
  if (!transporter) {
    console.warn('SMTP is not configured. Database save completed but email notification was skipped.');
    return { delivered: false, reason: 'SMTP is not configured.' };
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_NOTIFICATION_EMAIL,
      replyTo,
      subject,
      text: lines.join('\n'),
    });

    return { delivered: true };
  } catch (error) {
    console.error('Email notification failed:', error);
    return { delivered: false, reason: error instanceof Error ? error.message : 'Email delivery failed.' };
  }
};

app.get('/api/feedback', async (_req, res) => {
  if (!requireSupabase(res)) return;

  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('id, name, role, content, rating, created_at')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const feedback = (data ?? []).map((item) => ({
      id: item.id,
      name: item.name,
      role: item.role,
      content: item.content,
      rating: item.rating,
      createdAt: item.created_at,
    }));

    res.json(feedback);
  } catch (error) {
    console.error('GET /api/feedback failed:', error);
    res.status(500).json({ message: 'Failed to load feedback.' });
  }
});

app.post('/api/feedback', async (req, res) => {
  if (!requireSupabase(res)) return;

  try {
    const { name, role, content, rating } = req.body ?? {};

    if (!name || !role || !content || !rating) {
      return res.status(400).json({ message: 'All feedback fields are required.' });
    }

    const payload = {
      name: String(name).trim(),
      role: String(role).trim(),
      content: String(content).trim(),
      rating: Math.min(5, Math.max(1, Number(rating))),
    };

    const { data, error } = await supabase
      .from('feedback')
      .insert(payload)
      .select('id, name, role, content, rating, created_at')
      .single();

    if (error) throw error;

    const emailResult = await sendNotificationEmail({
      subject: `New Feedback Submission from ${payload.name}`,
      replyTo: undefined,
      lines: [
        `Name: ${payload.name}`,
        `Role: ${payload.role}`,
        `Rating: ${payload.rating}/5`,
        '',
        'Feedback:',
        payload.content,
      ],
    });

    res.status(201).json({
      id: data.id,
      name: data.name,
      role: data.role,
      content: data.content,
      rating: data.rating,
      createdAt: data.created_at,
      emailDelivered: emailResult.delivered,
    });
  } catch (error) {
    console.error('POST /api/feedback failed:', error);
    res.status(500).json({ message: 'Failed to save feedback.' });
  }
});

app.post('/api/contact', async (req, res) => {
  if (!requireSupabase(res)) return;

  try {
    const { name, email, phone, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone ?? '').trim() || null,
      message: String(message).trim(),
    };

    const { error } = await supabase.from('contact_submissions').insert(payload);

    if (error) throw error;

    const emailResult = await sendNotificationEmail({
      subject: `New Contact Inquiry from ${payload.name}`,
      replyTo: payload.email,
      lines: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || 'Not provided'}`,
        '',
        'Message:',
        payload.message,
      ],
    });

    res.status(201).json({
      message: emailResult.delivered
        ? 'Your inquiry has been submitted successfully.'
        : 'Your inquiry has been submitted successfully. Email notification is temporarily unavailable.',
      emailDelivered: emailResult.delivered,
    });
  } catch (error) {
    console.error('POST /api/contact failed:', error);
    res.status(500).json({ message: 'Failed to submit inquiry.' });
  }
});

app.listen(port, async () => {
  try {
    if (transporter) {
      await transporter.verify();
      console.log('SMTP connection verified.');
    } else {
      console.warn('SMTP is not fully configured. Email notifications are disabled.');
    }

    if (missingServerEnv.length > 0) {
      console.warn(`Missing server env vars: ${missingServerEnv.join(', ')}`);
    }

    console.log(`Feedback server running on http://localhost:${port}`);
  } catch (error) {
    console.error('Server startup warning:', error);
    console.log(`Feedback server running on http://localhost:${port}`);
  }
});
