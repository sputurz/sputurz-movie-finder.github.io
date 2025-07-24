import { IMovie } from '../models/Movie';
import { BASE_URL } from './config';

export const getMovie = async (MovieId: IMovie['id']): Promise<IMovie> => {
  const url = `${BASE_URL}/movie/${MovieId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
