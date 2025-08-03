import { FC, ReactNode } from 'react';
import * as S from './FormField.styles';

interface IProps {
  children: ReactNode;
  isError?: boolean;
  errorMessage?: string;
}

export const FormField: FC<IProps> = ({ children, isError, errorMessage }) => {
  return (
    <S.Label $isError={isError}>
      {children}
      {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.Label>
  );
};
