import { IMovie } from '../models';
import { makeRequest } from './config';

export const addFavorite = (id: string): Promise<void> => {
  return makeRequest('/favorites', {
    method: 'POST',
    data: { id },
  });
};

export const deleteFavorite = (movieId: IMovie['id']): Promise<void> => {
  return makeRequest(`/favorites/${movieId}`, {
    method: 'DELETE',
  });
};
