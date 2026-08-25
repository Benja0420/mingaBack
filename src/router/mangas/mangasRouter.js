import express from "express";

import mangasController from "../../controllers/mangas/mangasController.js";
import { validateSchema } from "../../schema/validator.js";
import {
	createMangaSchema,
	mangaIdSchema,
	updateMangaSchema,
} from "../../schema/mangas/mangasValidation.js";

const mangasRouter = express.Router();

mangasRouter.get("/", mangasController.getAllMangas);
mangasRouter.get("/me", mangasController.getMyMangas);
mangasRouter.post("/", validateSchema(createMangaSchema), mangasController.createManga);
mangasRouter.get("/:id", validateSchema(mangaIdSchema), mangasController.getMangaById);
mangasRouter.put("/:id", validateSchema(updateMangaSchema), mangasController.updateManga);
mangasRouter.delete("/:id", validateSchema(mangaIdSchema), mangasController.deleteManga);

export default mangasRouter;
