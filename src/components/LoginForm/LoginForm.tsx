import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormField } from '../FormField';
import { Icon } from '../Icon';
import {
  StyledLoginForm,
  StyledLoginFormBtn,
  StyledLoginFormWrap,
} from './LoginForm.styles';
import { LoginUser, LoginUserSchema } from '../../models/Auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getProfile, loginUser } from '../../api/AuthApi';

import { closeAuthModal } from '../AuthModal/AuthModalSlice';
import { useAppDispatch } from '../../store/hooks';
import { setUser } from '../../store/globalSlices/authSlice';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // reset,
  } = useForm<LoginUser>({
    resolver: zodResolver(LoginUserSchema),
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    async onSuccess() {
      const user = await getProfile();
      dispatch(setUser(user));
      queryClient.invalidateQueries({ queryKey: ['me'] });
      dispatch(closeAuthModal());
      // reset();
    },
    onError() {
      // reset();
    },
  });

  return (
    <StyledLoginForm
      onSubmit={handleSubmit(({ email, password }) => {
        loginMutation.mutate({ email, password });
      })}
    >
      <StyledLoginFormWrap>
        <FormField>
          <Icon name="MailIcon"></Icon>
          <input
            type="text"
            placeholder="Электронная почта"
            {...register('email')}
            autoComplete="email"
          ></input>
        </FormField>
        <FormField>
          <Icon name="PasswordIcon"></Icon>
          <input
            type="password"
            placeholder="Пароль"
            {...register('password')}
            autoComplete="current-password"
          ></input>
        </FormField>
      </StyledLoginFormWrap>

      <StyledLoginFormBtn type="submit" disabled={loginMutation.isPending}>
        Войти
      </StyledLoginFormBtn>
    </StyledLoginForm>
  );
};
