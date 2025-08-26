import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { Movies } from '../models';
import { AxiosError } from 'axios';

/**
 * Хук для получения избранных фильмов
 * @example
 * const { data, isLoading, isError } = useFavorites();
 *
 * @description
 * Хук выполняет запрос к API для получения избранных фильмов. Возвращаемые
 * параметры из хука useQuery().
 * Настройки запроса:
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключ запроса 'top10' для кэширования
 */

export function useFavorites() {
  return useQuery<Movies, AxiosError>({
    queryKey: ['favorites'],
    queryFn: () => Api.getFavorites(),
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
