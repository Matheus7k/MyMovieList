import {
  IMovieRepository,
  CreateMovieDTO,
} from "../repositories/IMovieRepository";

export class CreateMovieService {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(data: CreateMovieDTO): Promise<void> {
    this.movieRepository.create(data);
  }
}
