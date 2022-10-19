import { Router } from "express";
import {
  CreateMovieController,
  ListMovieController,
  UpdateMovieController,
  DeleteMovieController,
} from "../modules/movie/controllers/index";

export const movieRouter = Router();

movieRouter.post("/movie/create", new CreateMovieController().create);
movieRouter.get("/movie/:userId", new ListMovieController().list);
movieRouter.put("/movie/:id", new UpdateMovieController().update);
movieRouter.delete("/movie/:id", new DeleteMovieController().delete);
