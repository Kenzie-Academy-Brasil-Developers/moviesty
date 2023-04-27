import { Repository } from "typeorm";
import { string } from "zod";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  TMoviesPagination,
  TMoviesResponse,
} from "../interfaces/movies.interface";
import { moviesSchemaResponse } from "../schemas/movies.schema";

const listUsersService = async (
  sort: string | undefined,
  order: string | undefined,
  page: number | undefined,
  perPage: number | undefined
): Promise<TMoviesPagination> => {
  const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  let movies: Movie[] | undefined;

  const orderBy = order;
  let orderObj = {};

  if (orderBy === "price") {
    orderObj = {
      price: "desc",
    };
  } else if (orderBy === "duration") {
  }

  if (!page || !perPage) {
    movies = await userRepository.find();
  } else {
    movies = await userRepository.find({
      skip: (page - 1) * perPage,
      take: perPage,
      order: orderObj,
    });
  }

  const returnMovies: TMoviesResponse = moviesSchemaResponse.parse(movies);

  return {
    prevPage: "oi",
    nextPage: "oi",
    page: page || null,
    perPage: perPage || null,
    data: returnMovies,
  };
};

export default listUsersService;
