import express from "express";

import categoriesController from "../../controllers/categories/categoriesController.js";
import { validateSchema } from "../../schema/validator.js";
import {
	categoryIdSchema,
	createCategorySchema,
	updateCategorySchema,
} from "../../schema/categories/categoriesValidation.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.getCategories);
categoriesRouter.post("/", validateSchema(createCategorySchema), categoriesController.createCategory);
categoriesRouter.get("/:id", validateSchema(categoryIdSchema), categoriesController.getCategory);
categoriesRouter.put("/:id", validateSchema(updateCategorySchema), categoriesController.updateCategory);
categoriesRouter.delete("/:id", validateSchema(categoryIdSchema), categoriesController.deleteCategory);

export default categoriesRouter;
