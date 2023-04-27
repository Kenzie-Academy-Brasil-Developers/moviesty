import { Router } from "express";
import { createMovieController, listMoviesController } from "./controllers/movies.controllers";
import { validateBody } from "./middlewares/validateBody.middlewares";
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

export default userRouter;
