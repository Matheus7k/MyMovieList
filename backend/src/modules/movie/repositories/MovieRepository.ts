import { prisma } from "../../../database/prismaClient";
import {
  IMovieRepository,
  CreateMovieDTO,
  UpdateMovieDTO,
} from "./IMovieRepository";

export class MovieRepository implements IMovieRepository {
  async create({
    name,
    description,
    rating,
    userId,
  }: CreateMovieDTO): Promise<void> {
    await prisma.movie.create({
      data: {
        name,
        description,
        rating,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
  async update({
    id,
    name,
    description,
    rating,
  }: UpdateMovieDTO): Promise<void> {
    await prisma.movie.update({
      data: {
        name,
        description,
        rating,
      },
      where: {
        id: Number(id),
      },
    });
  }
  async findById(id: number) {
    const movie = await prisma.movie.findUnique({
      where: {
        id: Number(id),
      },
    });

    return movie;
  }
  async delete(id: number): Promise<void> {
    await prisma.movie.delete({
      where: {
        id: id,
      },
    });
  }
  async getAll(userId: string) {
    const movies = await prisma.movie.findMany({
      where: {
        User: {
          id: userId,
        },
      },
    });

    return movies;
  }
}
