import express from "express";

import categoriesController from "../../controllers/mangas/categoriesController.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.getCategories);
categoriesRouter.get("/:id", categoriesController.getCategory);
categoriesRouter.post("/", categoriesController.createCategory);
categoriesRouter.put("/:id", categoriesController.updateCategory);
categoriesRouter.delete("/:id", categoriesController.deleteCategory);

export default categoriesRouter;
