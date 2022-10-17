import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../modules/user/repositories/UserRepository";
import jwt from "jsonwebtoken";

type JwtPayload = {
  id: string;
};

export const authMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  const userRepository = new UserRepository();

  if (!authorization) {
    return response.status(401).json({ message: "Invalid authorization" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

    const user = await userRepository.findById(id);

    if (!user) {
      return response.status(401).json({ message: "Not authorized!" });
    }

    const { password: _, ...loggedUser } = user;

    request.user = loggedUser;

    next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid Token!" });
  }
};
