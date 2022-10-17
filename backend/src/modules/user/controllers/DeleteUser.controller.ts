import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUser.service";
import { UserRepository } from "../repositories/UserRepository";

export class DeleteUserController {
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = new UserRepository();
    const createUserService = new DeleteUserService(userRepository);

    try {
      await createUserService.execute(id);

      return response
        .status(201)
        .json({ message: "User deleted successfully" });
    } catch (err) {
      return response.send({
        erro: "Não existe uma conta com esse id!",
      });
    }
  }
}
