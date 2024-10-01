import express from 'express';

import authorsRouter from './authors/authorRouter.js';
import mangasRouter from './mangas/mangasRouter.js';
import categoriesRouter from './categories/categoriesRouter.js';
import chaptersRouter from "./chapter/chaptersRouter.js"
import authRouter from './auth/authRouter.js';

let router = express.Router();

router.use("/auth", authRouter)
router.use("/authors", authorsRouter)
router.use("/categories", categoriesRouter)
router.use("/chapters", chaptersRouter)
router.use("/mangas", mangasRouter)


export default router;