import { Router } from "express";
import {
  CreateUserController,
  UpdateUserController,
  DeleteUserController,
  UserLoginController,
} from "../modules/user/controllers/index";

import { authMiddleware } from "../middlewares/authMiddleware";

export const userRouter = Router();

userRouter.post("/user/singup", new CreateUserController().create);
userRouter.post("/user/login", new UserLoginController().login);

userRouter.use(authMiddleware);

userRouter.delete("/user/delete/:id", new DeleteUserController().delete);
userRouter.put("/user/update/:id", new UpdateUserController().update);
