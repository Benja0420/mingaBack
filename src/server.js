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
//descomentar la linea de abajo para que funcione en local
//app.listen(process.env.PORT , () => {console.log(`Server is running on port ${process.env.PORT}`);});
app.use('/', indexRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;