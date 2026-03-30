import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'data');
const jsonPath = path.join(dataDir, 'feedback.json');
const txtPath = path.join(dataDir, 'feedback.txt');
const app = express();
const port = 3001;

app.use(express.json());

const ensureFiles = async () => {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(jsonPath);
  } catch {
    await fs.writeFile(jsonPath, '[]', 'utf8');
  }
  try {
    await fs.access(txtPath);
  } catch {
    await fs.writeFile(txtPath, '', 'utf8');
  }
};

const readFeedback = async () => {
  await ensureFiles();
  const raw = await fs.readFile(jsonPath, 'utf8');
  return JSON.parse(raw || '[]');
};

const writeFeedbackFiles = async (feedback) => {
  await fs.writeFile(jsonPath, JSON.stringify(feedback, null, 2), 'utf8');
  const txt = feedback
    .map((item, index) => {
      return [
        `Feedback ${index + 1}`,
        `Name: ${item.name}`,
        `Role: ${item.role}`,
        `Rating: ${item.rating}/5`,
        `Date: ${item.createdAt}`,
        `Message: ${item.content}`,
        '',
      ].join('\n');
    })
    .join('\n');
  await fs.writeFile(txtPath, txt, 'utf8');
};

app.get('/api/feedback', async (_req, res) => {
  try {
    const feedback = await readFeedback();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load feedback.' });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const { name, role, content, rating } = req.body ?? {};

    if (!name || !role || !content || !rating) {
      return res.status(400).json({ message: 'All feedback fields are required.' });
    }

    const feedback = await readFeedback();
    const nextEntry = {
      id: crypto.randomUUID(),
      name: String(name).trim(),
      role: String(role).trim(),
      content: String(content).trim(),
      rating: Number(rating),
      createdAt: new Date().toISOString(),
    };

    const nextFeedback = [...feedback, nextEntry];
    await writeFeedbackFiles(nextFeedback);
    res.status(201).json(nextEntry);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save feedback.' });
  }
});

app.listen(port, async () => {
  await ensureFiles();
  console.log(`Feedback server running on http://localhost:${port}`);
});
