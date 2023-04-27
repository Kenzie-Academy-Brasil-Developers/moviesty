import { Request, Response } from "express";
import { createMovieService } from "../services/createMovie.service";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie = await createMovieService(req.body);
  return res.status(201).json(movie);
};

export const listMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const page: number | undefined = Number(req.query.page);
  const perPage: number | undefined = Number(req.query.perPage);

  return res.json();
};

export const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.json();
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.json();
};
