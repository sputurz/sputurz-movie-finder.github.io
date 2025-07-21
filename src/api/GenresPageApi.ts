import { IMovie } from '../models/Movie';
import { BASE_URL } from './config';

export const getMovieGenres = async (): Promise<IMovie['genres']> => {
  const url = `${BASE_URL}/movie/genres`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
