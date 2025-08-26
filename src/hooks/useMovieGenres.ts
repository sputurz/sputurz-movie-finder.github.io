import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';
import { AxiosError } from 'axios';

/**
 * Хук для получения списка жанров
 * @example
 * const { data, isLoading, isError } = useMovieGenres();
 *
 * @description
 * Хук выполняет запрос к API для получения списка жанров. Возвращаемые параметры
 * из хука useQuery().
 * Настройки запроса:
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключ запроса 'genres' для кэширования
 */

export function useMovieGenres() {
  return useQuery<IMovie['genres'], AxiosError>({
    queryKey: ['genres'],
    queryFn: () => Api.getMovieGenres(),
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
