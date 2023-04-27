import "reflect-metadata";
import express, { Application } from "express";
import userRouter from "./routes";
import { handleErrors } from "./middlewares/errorHandler.middlewares";

const app: Application = express();
app.use(express.json());

app.use("/movies", userRouter);

app.use(handleErrors);

export default app;
