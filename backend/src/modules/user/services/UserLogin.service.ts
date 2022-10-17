import { IUserRepository } from "../repositories/IUserRepository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class UserLoginService {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error(`Email invalid!`);
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      throw new Error(`Password invalid`);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "8h",
    });

    const { password: _, ...userLogin } = user;

    return { user: userLogin, token: token };
  }
}
