import { prisma } from "../../../database/prismaClient";
import {
  IUserRepository,
  CreateUserDTO,
  UpdateUserDTO,
} from "./IUserRepository";

export class UserRepository implements IUserRepository {
  async create({ email, username, password }: CreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        email,
        username,
        password,
        createdAt: new Date(),
      },
    });
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findByUsername(username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async update({ id, email, username, password }: UpdateUserDTO): Promise<any> {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        username,
        password,
      },
    });

    const { password: _, ...updatedUser } = user;

    return updatedUser;
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async getAll() {
    const users = await prisma.user.findMany();

    return users;
  }
}
