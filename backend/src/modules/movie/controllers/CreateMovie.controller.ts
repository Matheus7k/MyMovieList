import { Request, Response } from "express";
import { CreateMovieService } from "../services/CreateMovie.service";
import { MovieRepository } from "../repositories/MovieRepository";

export class CreateMovieController {
  async create(request: Request, response: Response) {
    const body = request.body;

    const movieRepository = new MovieRepository();
    const createMovieService = new CreateMovieService(movieRepository);

    try {
      createMovieService.execute(body);

      return response.status(201).json({ message: "Movie added successfully" });
    } catch (err) {
      return response.send(err);
    }
  }
}
