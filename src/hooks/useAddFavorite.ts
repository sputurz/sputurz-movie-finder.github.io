import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFavorite } from '../api/Favorites';
import { IMovie } from '../models';

/**
 * Хук для добавления фильма в избранное
 * @param {IMovie['id']} movieId - Id фильма
 * @returns {Object} Объект с методами и состоянием
 * @returns {Function} returns.addFavoriteHandler - Функция для обработки
 * добавления
 * @returns {boolean} returns.isPending - Флаг выполнения операции (загрузки)
 *
 * @example
 * const { onLike, isPending } = useAddFavorite(movieId);
 *
 * @description
 * Хук для добавления фильма в избранное.
 * Настройки запроса:
 * - Инвалидирует ключ запроса профиля 'me'
 */

export function useAddFavorite(movieId: IMovie['id']) {
  const queryClient = useQueryClient();

  const addFavoriteMutation = useMutation<void, Error, string>({
    mutationFn: (id) => addFavorite(id),
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });

  const addFavoriteHandler = () => {
    addFavoriteMutation.mutate(movieId.toString());
  };

  const isPending = addFavoriteMutation.isPending;

  return { addFavoriteHandler, isPending };
}
