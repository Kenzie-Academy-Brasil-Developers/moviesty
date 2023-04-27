import { Router } from "express";
import {
  createMovieController,
  listMoviesController,
  updateMovieController,
} from "./controllers/movies.controllers";
import { validateBody } from "./middlewares/validateBody.middlewares";
import { validateId } from "./middlewares/validateId.middlewares";
import { validateName } from "./middlewares/validateName.middlewares";
import { movieSchemaRequest } from "./schemas/movies.schema";

const userRouter = Router();

userRouter.post(
  "",
  validateBody(movieSchemaRequest),
  validateName,
  createMovieController
);
userRouter.get("", listMoviesController);
userRouter.patch("/:id", validateId, validateName, updateMovieController);

export default userRouter;
