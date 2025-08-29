import { z } from 'zod';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string().nullable().optional(),
  language: z.string().nullable().optional(),
  releaseYear: z.number().nullable().optional(),
  releaseDate: z.string().nullable().optional(),
  genres: z.array(z.string()).optional(),
  plot: z.string().nullable().optional(),
  runtime: z.number().nullable().optional(),
  budget: z.string().nullable().optional(),
  revenue: z.string().nullable().optional(),
  homepage: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  posterUrl: z.string().nullable().optional(),
  backdropUrl: z.string().nullable().optional(),
  trailerUrl: z.string().nullable().optional(),
  trailerYoutubeId: z.string().nullable().optional(),
  tmdbRating: z.number().nullable().optional(),
  searchL: z.string().nullable().optional(),
  keywords: z.array(z.string()).optional(),
  countriesOfOrigin: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  cast: z.array(z.string()).optional(),
  director: z.string().nullable().optional(),
  production: z.string().nullable().optional(),
  awardsSummary: z.string().nullable().optional(),
});

export type IMovie = z.infer<typeof MovieSchema>;

export interface IMovieOld {
  id: number;
  title: string;
  originalTitle: string;
  language: string;
  releaseYear: number;
  releaseDate: string;
  genres: string[];
  plot: string;
  runtime: number;
  budget: string;
  revenue: string;
  homepage: string;
  status: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  trailerYoutubeId: string;
  tmdbRating: number;
  searchL: string;
  keywords: string[];
  countriesOfOrigin: string[];
  languages: string[];
  cast: string[];
  director: string;
  production: string;
  awardsSummary: string;
}

export type Movies = IMovie[];

export function isMovie(data: unknown): data is IMovie {
  console.log(MovieSchema.safeParse(data));

  return MovieSchema.safeParse(data).success;
}
