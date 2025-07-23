import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';

export function useMovieRandom() {
  return useQuery({
    queryKey: ['random'],
    queryFn: () => Api.getMovieRandom(),
    retry: 0,
  });
}
