import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';
import { AxiosError } from 'axios';

/**
 * Хук для получения фильма по Id
 * @param {IMovie['id']} movieId - ID фильма
 *
 * @example
 * const { data, isLoading, isError } = useMovieById(movieId);
 *
 * @description
 * Хук выполняет запрос к API для получения фильма по Id. Возвращаемые параметры
 * из хука useQuery().
 * Настройки запроса:
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключ запроса 'movie' для кэширования
 */

export function useMovieById(movieId: IMovie['id']) {
  return useQuery<IMovie, AxiosError>({
    queryKey: ['movie'],
    queryFn: () => Api.getMovieById(movieId),
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
