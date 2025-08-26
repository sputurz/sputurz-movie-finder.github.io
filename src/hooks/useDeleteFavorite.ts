import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFavorite } from '../api/Favorites';
import { IMovie } from '../models';

/**
 * Хук для удаления фильма из избранного
 * @param {IMovie['id']} movieId - Id фильма
 * @returns {Object} Объект с методами и состоянием
 * @returns {Function} returns.addFavoriteHandler - Функция для обработки
 * удаления
 * @returns {boolean} returns.isPending - Флаг выполнения операции (загрузки)
 *
 * @example
 * const { onLike, isPending } = useDeleteFavorite(movieId);
 *
 * @description
 * Хук для удаления фильма из избранного.
 * Настройки запроса:
 * - Инвалидирует ключи запроса профиля и избранного 'me', 'favorites'
 */

export function useDeleteFavorite(movieId: IMovie['id']) {
  const queryClient = useQueryClient();

  const deleteFavoriteMutation = useMutation<void, Error, number>({
    mutationFn: deleteFavorite,
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['me'] });
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  const deleteFavoriteHandler = () => {
    deleteFavoriteMutation.mutate(movieId);
  };

  const isPending = deleteFavoriteMutation.isPending;

  return { deleteFavoriteHandler, isPending };
}
