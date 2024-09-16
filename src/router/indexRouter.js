import express from 'express';

import user from './user/userRouter.js';

const indexRouter = express.Router();
 indexRouter.use('/user', user); 

export default indexRouter;