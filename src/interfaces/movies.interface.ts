import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  movieSchema,
  movieSchemaRequest,
  moviesSchemaResponse,
} from "../schemas/movies.schema";

export type TMovie = z.infer<typeof movieSchema>;
export type TMovieRequest = z.infer<typeof movieSchemaRequest>;
export type TMoviesResponse = z.infer<typeof moviesSchemaResponse>;
export type TMovieUpdate = DeepPartial<TMovieRequest>;

export type TMoviesPagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TMoviesResponse;
};
