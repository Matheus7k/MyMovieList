import { Request, Response } from "express";
import { ListMovieService } from "../services/ListMovie.service";
import { MovieRepository } from "../repositories/MovieRepository";

export class ListMovieController {
  async list(request: Request, response: Response) {
    const { userId } = request.params;

    const movieRepository = new MovieRepository();
    const listMovieService = new ListMovieService(movieRepository);

    try {
      const movies = await listMovieService.execute(userId);

      return response.json({ movies });
    } catch (err) {
      return response.send(err);
    }
  }
}
