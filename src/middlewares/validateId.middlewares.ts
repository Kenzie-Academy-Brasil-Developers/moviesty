import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const validateId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id = Number(req.params.id);
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const exists = await movieRepo.exist({ where: { id: id } });

  if (!exists) {
    return next(new AppError("Movie not found", 404));
  }
  return next();
};
