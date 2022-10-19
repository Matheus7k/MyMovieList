import { Request, Response } from "express";
import { UpdateMovieService } from "../services/UpdateMovie.service";
import { MovieRepository } from "../repositories/MovieRepository";

export class UpdateMovieController {
  async update(request: Request, response: Response) {
    const body = request.body;
    const { id } = request.params;

    const movieRepository = new MovieRepository();
    const updateMovieService = new UpdateMovieService(movieRepository);

    const data = {
      ...body,
      id,
    };

    try {
      updateMovieService.execute(data);

      return response
        .status(201)
        .json({ message: "Movie update successfully" });
    } catch (err) {
      return response.send(err);
    }
  }
}
