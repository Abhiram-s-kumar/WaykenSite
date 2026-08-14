import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, '../frontend/dist');

const enquirySchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    organisation: { type: String, trim: true },
    enquiryType: { type: String, trim: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
let mongoReady = false;

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      mongoReady = true;
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.warn('MongoDB connection failed:', error.message);
    });
} else {
  console.warn('MONGODB_URI is not set. Enquiries will be accepted but not persisted.');
}

// Configurable CORS origins
const configuredOrigins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const isOriginAllowed = (origin) => {
  // Allow requests with no origin (like mobile apps, curl, Postman, server-to-server)
  if (!origin) return true;

  // Check explicit configured origins or wildcard
  if (configuredOrigins.includes('*') || configuredOrigins.includes(origin)) {
    return true;
  }

  // Allow localhost and 127.0.0.1 on any port for local development/testing
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
    return true;
  }

  // Allow Vercel preview and production deployments
  if (/^https:\/\/.*\.vercel\.app$/.test(origin)) {
    return true;
  }

  return false;
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
  })
);
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, mongoReady });
});

app.post('/api/enquiries', async (req, res) => {
  const { firstName, lastName, email, organisation, enquiryType, message } = req.body ?? {};

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: 'First name, email, and message are required.' });
  }

  const enquiry = {
    firstName,
    lastName,
    email,
    organisation,
    enquiryType,
    message
  };

  try {
    if (mongoReady) {
      await Enquiry.create(enquiry);
    } else {
      console.log('Received enquiry without MongoDB persistence:', enquiry);
    }

    return res.status(201).json({ message: 'Enquiry received.', persisted: mongoReady });
  } catch (error) {
    console.error('Failed to save enquiry:', error);
    return res.status(500).json({ message: 'Unable to save enquiry.' });
  }
});

if (existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Wayken server running on http://localhost:${port}`);
});
