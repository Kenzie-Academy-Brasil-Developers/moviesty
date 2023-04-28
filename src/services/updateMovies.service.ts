import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { TMovie, TMovieUpdate } from "../interfaces/movies.interface";
import { movieSchema } from "../schemas/movies.schema";

export const updateMovieService = async (
  data: TMovieUpdate,
  id: number
): Promise<TMovie> => {
  const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldData: Movie | null = await userRepository.findOneBy({
    id: id,
  });

  const newUserData: Movie = userRepository.create({
    ...oldData,
    ...data,
  });
  await userRepository.save(newUserData);

  const returnMovie: TMovie = movieSchema.parse(newUserData);

  return returnMovie;
};
