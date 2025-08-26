import { openAuthModal } from '../components/AuthModal/AuthModalSlice';
import { IMovie } from '../models';
import {
  selectIsAuthenticated,
  selectUser,
} from '../store/globalSlices/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useAddFavorite } from './useAddFavorite';
import { useDeleteFavorite } from './useDeleteFavorite';

/**
 * Хук для управления лайками
 * @param {IMovie['id']} movieId - Id фильма
 * @returns {Object} Объект с методами и состоянием
 * @returns {Function} returns.onLike - Функция для обработки лайка/анлайка
 * @returns {boolean} returns.isPending - Флаг выполнения операции (загрузки)
 *
 * @example
 * const { onLike, isPending } = useLike(movieId);
 *
 * @description
 * Хук для управления лайками. Хук автоматически проверяет авторизацию пользователя:
 * - Если пользователь не авторизован, открывает модальное окно авторизации
 * - Если пользователь авторизован, добавляет/удаляет фильм из избранного
 */

export function useLike(movieId: IMovie['id']) {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);

  const { deleteFavoriteHandler, isPending: isDeletePending } =
    useDeleteFavorite(movieId);
  const { addFavoriteHandler, isPending: isAddPending } =
    useAddFavorite(movieId);

  const onLike = () => {
    if (!isAuthenticated) {
      dispatch(openAuthModal());
      return;
    }

    if (user?.favorites.includes(movieId.toString())) {
      deleteFavoriteHandler();
    } else {
      addFavoriteHandler();
    }
  };

  const isPending = isDeletePending || isAddPending;

  return { onLike, isPending };
}
