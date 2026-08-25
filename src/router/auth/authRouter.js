import express from "express";
import authController from "../../controllers/auth/authController.js";
import { validateSchema } from "../../schema/validator.js";
import {
	createUserSchema,
	loginSchema,
	updateUserSchema,
	userIdSchema,
} from "../../schema/user/userValidation.js";

const authRouter = express.Router();

authRouter.get("/", authController.getUsers);
authRouter.post("/", validateSchema(createUserSchema), authController.createUser);
authRouter.post("/login", validateSchema(loginSchema), authController.login);
authRouter.get("/:id", validateSchema(userIdSchema), authController.getUserById);
authRouter.put("/:id", validateSchema(updateUserSchema), authController.updateUser);
authRouter.delete("/:id", validateSchema(userIdSchema), authController.deleteUser);

export default authRouter;
