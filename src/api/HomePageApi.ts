import { IMovie, Movies } from '../models/Movie';
import { BASE_URL } from './config';

export const getMovieTop10 = async (): Promise<Movies> => {
  const url = `${BASE_URL}/movie/top10`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getMovieRandom = async (): Promise<IMovie> => {
  const url = `${BASE_URL}/movie/random`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
