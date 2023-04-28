import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

export const deleteMovieservice = async (id: number): Promise<DeleteResult> => {

  const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const results = await userRepository.delete(id);

  return results;
};
