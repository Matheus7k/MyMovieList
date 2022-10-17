import { IUserRepository } from "../repositories/IUserRepository";

export class DeleteUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error(`User ${id} does not exist`);
    }

    this.userRepository.delete(id);
  }
}
