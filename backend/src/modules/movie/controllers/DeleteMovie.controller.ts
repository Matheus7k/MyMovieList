import { Request, Response } from "express";
import { DeleteMovieService } from "../services/DeleteMovie.service";
import { MovieRepository } from "../repositories/MovieRepository";

export class DeleteMovieController {
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const movieRepository = new MovieRepository();
    const deleteMovieService = new DeleteMovieService(movieRepository);

    try {
      deleteMovieService.execute(Number(id));

      return response
        .status(201)
        .json({ message: "Movie deleted successfully!" });
    } catch (err) {
      return response.status(500).json(err);
    }
  }
}
