import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z
    .number()
    .int()
    .min(1, { message: "Number must be greater than 0" }),
  price: z.number().int(),
});

export const movieSchemaRequest = movieSchema.omit({
  id: true,
});

export const moviesSchemaResponse = z.array(movieSchema);

export const movieSchemaUpdate = movieSchemaRequest.partial();
