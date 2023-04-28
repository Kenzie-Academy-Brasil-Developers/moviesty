import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  listMoviesController,
  updateMovieController,
} from "./controllers/movies.controllers";
import { validateBody } from "./middlewares/validateBody.middlewares";
import { validateId } from "./middlewares/validateId.middlewares";
import { validateName } from "./middlewares/validateName.middlewares";
import { movieSchemaRequest, movieSchemaUpdate } from "./schemas/movies.schema";

const userRouter = Router();

userRouter.post(
  "",
  validateBody(movieSchemaRequest),
  validateName,
  createMovieController
);
userRouter.get("", listMoviesController);
userRouter.patch(
  "/:id",
  validateId,
  validateBody(movieSchemaUpdate),
  validateName,
  updateMovieController
);
userRouter.delete("/:id", validateId, deleteMovieController);

export default userRouter;
