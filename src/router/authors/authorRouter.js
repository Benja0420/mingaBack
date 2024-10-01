import express from 'express';

import authorController from '../../controllers/authors/authorController.js';

const authorRouter = express.Router();

authorRouter.get('/', authorController.getAllAuthors);

export default authorRouter;