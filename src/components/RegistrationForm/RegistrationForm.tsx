import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormField } from '../FormField';
import { Icon } from '../Icon';
import * as S from './RegistrationForm.styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterUserConfirm, RegisterUserSchema } from '../../models';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../api/AuthApi';
import { FC } from 'react';
import { Button } from '../Button';

interface IProps {
  onSuccess: () => void;
}

export const RegistrationForm: FC<IProps> = ({ onSuccess }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterUserConfirm>({
    resolver: zodResolver(RegisterUserSchema),
  });

  const RegisterMutation = useMutation({
    mutationFn: registerUser,
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['login'] });
      onSuccess();
      reset();
    },
  });

  return (
    <S.Form
      onSubmit={handleSubmit(({ email, password, name, surname }) => {
        RegisterMutation.mutate({ email, password, name, surname });
      })}
    >
      <S.Title>Create a new account</S.Title>
      <S.Wrap>
        <FormField
          errorMessage={errors.email?.message}
          isError={!!errors.email}
        >
          <Icon name="MailIcon"></Icon>
          <input
            type="text"
            placeholder="E-mail"
            autoComplete="email"
            {...register('email')}
          ></input>
        </FormField>
        <FormField errorMessage={errors.name?.message} isError={!!errors.name}>
          <Icon name="UserIcon"></Icon>
          <input
            type="text"
            placeholder="Name"
            autoComplete="given-name"
            {...register('name')}
          ></input>
        </FormField>
        <FormField
          errorMessage={errors.surname?.message}
          isError={!!errors.surname}
        >
          <Icon name="UserIcon"></Icon>
          <input
            type="text"
            placeholder="Surname"
            autoComplete="family-name"
            {...register('surname')}
          ></input>
        </FormField>
        <FormField
          errorMessage={errors.password?.message}
          isError={!!errors.password}
        >
          <Icon name="PasswordIcon"></Icon>
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            {...register('password')}
          ></input>
        </FormField>
        <FormField
          errorMessage={errors.confirmPassword?.message}
          isError={!!errors.confirmPassword}
        >
          <Icon name="PasswordIcon"></Icon>
          <input
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            {...register('confirmPassword')}
          ></input>
        </FormField>
      </S.Wrap>
      <Button isLoading={RegisterMutation.isPending} type="submit" kind="auth">
        Sign Up
      </Button>
      {RegisterMutation.error && (
        <S.ErrorText>{RegisterMutation.error.message}</S.ErrorText>
      )}
    </S.Form>
  );
};
