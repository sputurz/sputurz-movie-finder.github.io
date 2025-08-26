import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';
import { AxiosError } from 'axios';

/**
 * Хук для получения случайного фильма
 * @example
 * const { data, isLoading, isError } = useMovieRandom();
 *
 * @description
 * Хук выполняет запрос к API для получения случайного фильма. Возвращаемые
 * параметры из хука useQuery().
 * Настройки запроса:
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключ запроса 'random' для кэширования
 */

export function useMovieRandom() {
  return useQuery<IMovie, AxiosError>({
    queryKey: ['random'],
    queryFn: () => Api.getMovieRandom(),
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
