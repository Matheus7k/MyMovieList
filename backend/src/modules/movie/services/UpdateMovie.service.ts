import {
  IMovieRepository,
  UpdateMovieDTO,
} from "../repositories/IMovieRepository";

export class UpdateMovieService {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(data: UpdateMovieDTO): Promise<void> {
    const movieExists = this.movieRepository.findById(data.id);

    if (!movieExists) {
      throw new Error("This movie does not exist!");
    }

    this.movieRepository.update(data);
  }
}
