import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import "./config/db.js";

import { logger } from "./middlewares/logger.js";
import indexRouter from "./router/indexRouter.js";

dotenv.config();
const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`\x1b[4;94mhttp://localhost:${process.env.PORT}\x1b[0m`);
});
app.use("/", indexRouter);
app.get("/", (req, res) => {
  res.send("ok 🟢");
});

export default app;
