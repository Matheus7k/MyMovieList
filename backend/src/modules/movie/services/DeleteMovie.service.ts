import { IMovieRepository } from "../repositories/IMovieRepository";

export class DeleteMovieService {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(id: number): Promise<void> {
    const movie = await this.movieRepository.findById(Number(id));

    if (!movie) {
      throw new Error("Movie not found!");
    }

    this.movieRepository.delete(id);
  }
}
