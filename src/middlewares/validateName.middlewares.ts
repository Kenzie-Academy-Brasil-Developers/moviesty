import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const validateName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { name } = req.body;

  if (name) {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
    const exists = await movieRepo.exist({ where: { name: name } });
    if (exists) {
      return next(new AppError("Movie already exists.", 409));
    }
  }

  return next();
};
