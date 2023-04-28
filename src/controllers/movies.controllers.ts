import { Request, Response } from "express";
import { TMovieUpdate } from "../interfaces/movies.interface";
import { createMovieService } from "../services/createMovie.service";
import { deleteMovieservice } from "../services/deleteMovie.service";
import { listMovieService } from "../services/listMovies.service";
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
  const sort: string | null = req.query.sort as string;
  const order: string | null = req.query.order as string;
  const page: number | null = Number(req.query.page);
  const perPage: number | null = Number(req.query.perPage);

  const listMovie = await listMovieService(sort, order, page, perPage);

  return res.json(listMovie);
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
  const id: number = parseInt(req.params.id);

  deleteMovieservice(id);
  return res.status(204).send();
};
