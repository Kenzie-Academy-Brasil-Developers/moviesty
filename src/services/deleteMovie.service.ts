import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

export const deleteMovieservice = async (id: number): Promise<DeleteResult> => {
  console.log(id);

  const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const results = await userRepository.delete(id);

  return results;
};
