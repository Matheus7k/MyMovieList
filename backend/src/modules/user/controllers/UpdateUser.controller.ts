import { Request, Response } from "express";
import { UpdateUserService } from "../services/Updateuser.service";
import { UserRepository } from "../repositories/UserRepository";

export class UpdateUserController {
  async update(request: Request, response: Response) {
    const body = request.body;
    const { id } = request.params;

    const userRepository = new UserRepository();
    const updateUserService = new UpdateUserService(userRepository);

    const updateUserData = {
      id,
      ...body,
    };

    try {
      const result = await updateUserService.excute(updateUserData);

      return response.status(201).json(result);
    } catch (err) {
      return response.send({
        erro: "Não existe um usuário com esse Id!",
      });
    }
  }
}
