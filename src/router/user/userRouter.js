import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, login } from '../../controllers/user/authController.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/login', login);

export default userRouter;
