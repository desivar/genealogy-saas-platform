import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environmental variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔒 Security Middlewares
app.use(helmet()); 
app.use(cors({ origin: 'http://localhost:5173' })); // Allows your local React app to communicate safely
app.use(express.json()); 

// 📡 Server Status Route
app.get('/api/status', (req: Request, res: Response): void => {
  res.json({ 
    status: 'Online', 
    service: 'Genealogy Platform API Engine',
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 TypeScript backend operational and listening on port ${PORT}`);
});