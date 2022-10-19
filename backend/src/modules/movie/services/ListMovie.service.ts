import { IMovieRepository } from "../repositories/IMovieRepository";

export class ListMovieService {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(userId: string) {
    const movies = await this.movieRepository.getAll(userId);

    return movies;
  }
}
