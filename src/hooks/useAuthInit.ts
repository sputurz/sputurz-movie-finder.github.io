import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import {
  clearUser,
  setLoading,
  setUser,
} from '../store/globalSlices/authSlice';
import Api from '../api/api';
import { AxiosError } from 'axios';
import { User } from '../models';

/**
 * Хук для инициализации пользователя
 * @returns {Object} returns.query - объект содержащий параметры хука useQuery
 *
 * @example
 *  useAuthInit();
 *
 * @description
 * Хук для инициализации пользователя. Используем хук вверху вашего приложения.
 * Нужен для коректной работы аутентификации после перезапуска приложения. При
 * наличии положительного ответа или ошибки сохранеяет пользователя в стейт
 * Redux.
 * Настройки запроса:
 * - Не повторяет запрос при ошибках (retry: 0)
 * - Не кэширует данные ( staleTime: 0)
 * - Не обновляет данные при фокусе окна (refetchOnWindowFocus: false)
 * - Использует ключ запроса профиля 'me'
 */

export const useAuthInit = () => {
  const dispatch = useDispatch();

  const query = useQuery<User, AxiosError>({
    queryKey: ['me'],
    queryFn: Api.getProfile,
    retry: false,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  const { data, isError, isFetching } = query;

  useEffect(() => {
    dispatch(setLoading(isFetching));

    if (data) dispatch(setUser(data));
    if (isError) dispatch(clearUser());
  }, [data, isError, isFetching, dispatch]);

  return query;
};
