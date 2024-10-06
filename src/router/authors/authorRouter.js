import express from "express";

import authorController from "../../controllers/authors/authorController.js";

const authorRouter = express.Router();

authorRouter.get("/", authorController.getAllAuthors);
authorRouter.get("/:id", authorController.getAuthorById);
authorRouter.post("/", authorController.createAuthor);
authorRouter.put("/:id", authorController.updateAuthor);
authorRouter.delete("/:id", authorController.deleteAuthor);

export default authorRouter;
