import { Request, Response } from "express";
import { UserLoginService } from "../services/UserLogin.service";
import { UserRepository } from "../repositories/UserRepository";

export class UserLoginController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const userLoginService = new UserLoginService(userRepository);

    try {
      const result = await userLoginService.execute(email, password);

      return response.json(result);
    } catch (err) {
      return response.send({
        erro: "Email ou senha invalido!",
      });
    }
  }
}
