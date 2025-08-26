import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { Movies } from '../models';
import { AxiosError } from 'axios';

/**
 * Хук для получения топ-10 фильмов
 * @example
 * const { data, isLoading, isError } = useMovieTop();
 *
 * @description
 * Хук выполняет запрос к API для получения топ-10 фильмов. Возвращаемые
 * параметры из хука useQuery().
 * Настройки запроса:
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключ запроса 'top10' для кэширования
 */

export function useMovieTop() {
  return useQuery<Movies, AxiosError>({
    queryKey: ['top10'],
    queryFn: () => Api.getMovieTop10(),
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
