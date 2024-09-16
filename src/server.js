import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import './config/db.js';

import { logger } from './middlewares/logger.js';
import indexRouter from './router/indexRouter.js';

dotenv.config();
const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());

app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;