import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';

export function useMovie(MovieId: IMovie['id']) {
  return useQuery({
    queryKey: ['top10'],
    queryFn: () => Api.getMovie(MovieId),
    retry: 0,
  });
}
