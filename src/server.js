import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import "./config/db.js";

import { logger } from "./middlewares/logger.js";
import indexRouter from "./router/indexRouter.js";

dotenv.config();
const app = express();
/* const PORT = process.env.PORT || 5000; */

app.use(logger);
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
/* app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`\x1b[4;94mhttp://localhost:${PORT}\x1b[0m`);
}); */
app.use("/", indexRouter);
app.get("/", (req, res) => {
  res.send("ok ✅🟢");
});

export default app;
