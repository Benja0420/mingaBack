import express from "express";

import authorController from "../../controllers/authors/authorController.js";
import { validateSchema } from "../../schema/validator.js";
import {
	authorIdSchema,
	createAuthorSchema,
	updateAuthorSchema,
} from "../../schema/author/authorValidation.js";

const authorRouter = express.Router();

authorRouter.get("/", authorController.getAllAuthors);
authorRouter.post("/", validateSchema(createAuthorSchema), authorController.createAuthor);
authorRouter.get("/:id", validateSchema(authorIdSchema), authorController.getAuthorById);
authorRouter.put("/:id", validateSchema(updateAuthorSchema), authorController.updateAuthor);
authorRouter.delete("/:id", validateSchema(authorIdSchema), authorController.deleteAuthor);

export default authorRouter;
