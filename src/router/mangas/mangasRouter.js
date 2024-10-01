import express from 'express';

import mangasController from '../../controllers/mangas/mangasController.js';

const mangasRouter = express.Router();

mangasRouter.get("/", mangasController.getAllMangas);
mangasRouter.get("/:id", mangasController.getMangaById);
mangasRouter.post("/", mangasController.createManga);
mangasRouter.put("/:id", mangasController.updateManga);
mangasRouter.delete("/:id", mangasController.deleteManga);
mangasRouter.get("/me", mangasController.getMyMangas);



export default mangasRouter;