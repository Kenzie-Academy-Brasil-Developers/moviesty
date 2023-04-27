import { Request, Response } from "express";
import { TMovieUpdate } from "../interfaces/movies.interface";
import { createMovieService } from "../services/createMovie.service";
import { updateMovieService } from "../services/updateMovies.service";

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
  const data: TMovieUpdate = req.body;
  const id: number = parseInt(req.params.id);

  const updatedMovie = await updateMovieService(data, id);
  return res.json(updatedMovie);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.json();
};
