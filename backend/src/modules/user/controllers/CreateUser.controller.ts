import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUser.service";
import { UserRepository } from "../repositories/UserRepository";

export class CreateUserController {
  async create(request: Request, response: Response) {
    const body = request.body;

    const userRepository = new UserRepository();
    const createUserService = new CreateUserService(userRepository);

    try {
      await createUserService.execute(body);

      return response
        .status(201)
        .json({ message: "User created successfully" });
    } catch (err) {
      return response
        .status(500)
        .json({ message: "Email/username already exists!" });
    }
  }
}
