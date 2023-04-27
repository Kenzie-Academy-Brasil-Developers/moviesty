import { AppDataSource } from "../data-source";

import { Repository } from "typeorm";
import { Movie } from "../entities";
import { TMovieRequest } from "../interfaces/movies.interface";

export const createMovieService = async (
  payload: TMovieRequest
): Promise<Movie> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie = movieRepo.create(payload);

  await movieRepo.save(movie);

  return movie;
};
