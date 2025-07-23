import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';

export function useMovieTop() {
  return useQuery({
    queryKey: ['top10'],
    queryFn: () => Api.getMovieTop10(),
    retry: 0,
  });
}
