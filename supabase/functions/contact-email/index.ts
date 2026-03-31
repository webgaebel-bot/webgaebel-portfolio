const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const notificationTo = Deno.env.get('NOTIFICATION_TO_EMAIL');
    const notificationFrom = Deno.env.get('NOTIFICATION_FROM_EMAIL');

    if (!resendApiKey || !notificationTo || !notificationFrom) {
      return new Response(
        JSON.stringify({
          message: 'Missing RESEND_API_KEY, NOTIFICATION_TO_EMAIL, or NOTIFICATION_FROM_EMAIL.',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const payload = await req.json();
    const record = payload?.record ?? payload;

    const name = String(record?.name ?? '').trim();
    const email = String(record?.email ?? '').trim();
    const phone = String(record?.phone ?? '').trim() || 'Not provided';
    const message = String(record?.message ?? '').trim();
    const createdAt = String(record?.created_at ?? new Date().toISOString());

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Invalid contact submission payload.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: notificationFrom,
        to: [notificationTo],
        reply_to: email,
        subject: `New Contact Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
            <h2 style="margin-bottom: 16px;">New Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Submitted:</strong> ${createdAt}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br />')}</p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return new Response(JSON.stringify({ message: 'Failed to send notification email.', errorText }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : 'Unexpected error.',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
