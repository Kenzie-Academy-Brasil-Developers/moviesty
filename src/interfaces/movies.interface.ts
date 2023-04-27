import { z } from "zod";
import {
  movieSchema,
  movieSchemaRequest,
  moviesSchemaResponse,
} from "../schemas/movies.schema";

export type TMovie = z.infer<typeof movieSchema>;
export type TMovieRequest = z.infer<typeof movieSchemaRequest>;
export type TMoviesResponse = z.infer<typeof moviesSchemaResponse>;

export type TMoviesPagination = {
  prevPage: string;
  nextPage: string;
  page: number | null | undefined;
  perPage: number | null | undefined;
  data: TMoviesResponse;
};
