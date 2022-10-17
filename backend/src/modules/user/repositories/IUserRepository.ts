export type CreateUserDTO = {
  email: string;
  username: string;
  password: string;
  createdAt?: Date;
};

export type UpdateUserDTO = {
  id: string;
  email: string;
  username: string;
  password: string;
};

export type UpdatedUserDTO = {
  id: string;
  email: string;
  username: string;
  createdAt?: Date;
};

export interface IUserRepository {
  create({ email, username, password }: CreateUserDTO): void;
  findByEmail(email: string): any;
  findByUsername(username: string): any;
  findById(id: string): any;
  update({ id, email, username, password }: UpdateUserDTO): any;
  delete(id: string): void;
  getAll(): any;
}
