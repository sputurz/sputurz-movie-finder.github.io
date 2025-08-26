import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { Movies } from '../models';
import { AxiosError } from 'axios';

/**
 * Хук для поиска списка фильмов по названию
 * @param {string} searchValue - Поисковый запрос (название фильма)
 *
 * @example
 * const { data, error } = useSearch(debouncedSearch);
 *
 * @description
 * Хук выполняет запрос к API для получения списка фильмов отфильтрованных по
 * введенному названию. Возвращаемые параметры из хука useQuery().
 * Настройки запроса:
 * - Запрос выполняется только когда searchValue не пустой (enabled:
 * !!searchValue)
 * - Возвращает максимум 5 результатов (count: 5)
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключи запроса 'search', searchValue для кэширования
 */

export function useSearch(searchValue: string) {
  return useQuery<Movies, AxiosError>({
    queryKey: ['search', searchValue] as const,
    queryFn: () => Api.getMovies({ count: 5, title: searchValue }),
    enabled: !!searchValue,
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
