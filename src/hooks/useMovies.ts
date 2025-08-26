import { useInfiniteQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IGetMovies } from '../api/MoviesPageApi';
import { Movies } from '../models';
import { AxiosError } from 'axios';

/**
 * Хук для получения фильтрованных фильмов
 * * @param {Omit<IGetMovies, 'page'>} params - Параметры фильтрации фильмов (без параметра page)
 * @example
 * const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovies({
      count: searchCount,
      title: searchTitle,
      genre: searchGenre,
    });
 *
 * @description
 * Хук выполняет запрос к API для получения фильтрованных фильмов. Возвращаемые
 * параметры из хука useInfiniteQuery(), что позволяет реализовать пагинацию 
 * используя fetchNextPage.
 * Настройки запроса:
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не кэширует данные (gcTime: 0, staleTime: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключи запроса ['movies', params] для кэширования
 */

export function useMovies(params: Omit<IGetMovies, 'page'>) {
  return useInfiniteQuery<Movies, AxiosError>({
    queryKey: ['movies', params],

    queryFn: ({ pageParam = 0 }) =>
      Api.getMovies({ ...params, page: pageParam as number }),

    getNextPageParam: (lastPage, allPages) => {
      const count = params.count ?? 10;

      return lastPage.length < count ? undefined : allPages.length;
    },
    initialPageParam: 0,
    retry: 0,
    gcTime: 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}
