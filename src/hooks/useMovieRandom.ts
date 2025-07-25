import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';

export function useMovieRandom() {
  return useQuery<IMovie>({
    queryKey: ['random'],
    queryFn: () => Api.getMovieRandom(),
    retry: 0,
  });
}
