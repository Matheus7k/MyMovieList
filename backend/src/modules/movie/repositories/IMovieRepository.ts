export type CreateMovieDTO = {
  name: string;
  description?: string;
  rating: string;
  userId: string;
};

export type UpdateMovieDTO = {
  id: number;
  name: string;
  description: string;
  rating: string;
};

export interface IMovieRepository {
  create({ name, description, rating, userId }: CreateMovieDTO): void;
  update({ id, name, description, rating }: UpdateMovieDTO): void;
  findById(id: number): any;
  delete(id: number): void;
  getAll(userId: string): any;
}
