import { IUserRepository } from "../repositories/IUserRepository";
import bcrypt from "bcrypt";

type CreateUser = {
  email: string;
  username: string;
  password: string;
};

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUser) {
    const { email, username, password } = data;
    const userExistsEmail = await this.userRepository.findByEmail(email);

    if (userExistsEmail) {
      throw new Error("User email already exists!");
    }

    const userExistsUsername = await this.userRepository.findByUsername(
      username
    );

    if (userExistsUsername) {
      throw new Error("Username already exists!");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newData = {
      email,
      username,
      password: hashPassword,
    };

    this.userRepository.create(newData);
  }
}
