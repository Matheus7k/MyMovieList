import {
  IUserRepository,
  UpdateUserDTO,
} from "../repositories/IUserRepository";
import bcrypt from "bcrypt";

type UpdateUser = {
  email: string;
  username: string;
  password: string;
};

export class UpdateUserService {
  constructor(private userRepository: IUserRepository) {}

  async excute(data: UpdateUserDTO) {
    const { id, email, username, password } = data;
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error(`User ${id} does not exist`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newData = {
      id,
      email,
      username,
      password: hashPassword,
    };

    const updateUser = await this.userRepository.update(newData);

    return updateUser;
  }
}
