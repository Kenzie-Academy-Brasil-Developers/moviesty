import { FindOptionsOrder, Repository } from "typeorm";
import { string } from "zod";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  TMoviesPagination,
  TMoviesResponse,
} from "../interfaces/movies.interface";
import { moviesSchemaResponse } from "../schemas/movies.schema";

export const listMovieService = async (
  sort: string | null,
  order: string | null,
  page: number | null,
  perPage: number | null
): Promise<TMoviesPagination> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const count = await movieRepository.count();

  let orderObj = {};

  if (sort) {
    if (order === undefined) {
      if (sort === "price") {
        orderObj = {
          price: "asc",
        };
      } else if (sort === "duration") {
        orderObj = {
          duration: "asc",
        };
      }
    }

    if (order === "desc") {
      if (sort === "price") {
        orderObj = {
          price: "desc",
        };
      } else if (sort === "duration") {
        orderObj = {
          duration: "desc",
        };
      }
    }

    if (order === "asc") {
      if (sort === "price") {
        orderObj = {
          price: "asc",
        };
      } else if (sort === "duration") {
        orderObj = {
          duration: "asc",
        };
      }
    }
  }

  const validatePerPage: number =
    !perPage || perPage <= 0 || perPage > 5 ? 5 : perPage;
  const validatePage: number =
    !page || page <= 0 ? 0 : (page - 1) * validatePerPage;

  const movies = await movieRepository.find({
    skip: validatePage,
    take: validatePerPage,
    order: orderObj,
  });

  const returnMovies: TMoviesResponse = moviesSchemaResponse.parse(movies);

  let countUrl = Math.ceil(count / validatePerPage);
  console.log(countUrl);

  const currentValue: number = !page || page <= 0 ? 1 : page;

  const prevUrl =
    currentValue <= countUrl && currentValue >= 2
      ? `http://localhost:3000/movies?page=${
          currentValue - 1
        }&perPage=${validatePerPage}`
      : null;

  const nextUrl =
    currentValue < countUrl
      ? `http://localhost:3000/movies?page=${
          currentValue + 1
        }&perPage=${validatePerPage}`
      : null;

  return {
    prevPage: prevUrl,
    nextPage: nextUrl,
    count: count,
    data: returnMovies,
  };
};
