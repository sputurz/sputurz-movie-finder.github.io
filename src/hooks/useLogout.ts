import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '../api/api';
import { clearUser } from '../store/globalSlices/authSlice';

/**
 * Хук для логаута
 * @returns {Object} Объект с методами и состоянием
 * @returns {Function} returns.handleLogout - Функция для обработки логаута
 * @returns {boolean} returns.isPending - Флаг выполнения операции (загрузки)
 *
 * @example
 * const { handleLogout, isPending } = useLogout();
 *
 * @description
 * Хук разлагинивает пользователя и обновляет queryKey профиля. Метод handleLogout автоматически пересылает на главную страницу. Флаг returns.isPending из флага isPending хука useMutation().
 */

export function useLogout(): object {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: () => Api.logoutUser(),
    onSuccess: () => {
      dispatch(clearUser());
      queryClient.removeQueries({ queryKey: ['me'] });
      navigate('/', { replace: true });
    },
    onError: () => {
      dispatch(clearUser());
      queryClient.removeQueries({ queryKey: ['me'] });
      navigate('/', { replace: true });
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const isPending = logoutMutation.isPending;

  return { handleLogout, isPending };
}
