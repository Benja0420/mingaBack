import express from "express";
import authController from "../../controllers/auth/authController.js";

const authRouter = express.Router();

authRouter.get("/", authController.getUsers);
authRouter.get("/:id", authController.getUserById);
authRouter.post("/", authController.createUser);
authRouter.put("/:id", authController.updateUser);
authRouter.delete("/:id", authController.deleteUser);
authRouter.post("/login", authController.login);

export default authRouter;
