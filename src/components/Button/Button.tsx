import type { FC, HTMLAttributes, ReactNode } from 'react';
import * as S from './Button.styles';
import { Loader } from '../Loader';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: 'primary' | 'secondary' | 'auth';
  type?: 'submit' | 'reset' | 'button';
  onClick: () => void;
}

export const Button: FC<IProps> = ({
  children,
  kind = 'primary',
  isLoading,
  isDisabled = isLoading,
  type = 'button',
  onClick,
}) => {
  return (
    <S.Btn disabled={isDisabled} type={type} $kind={kind} onClick={onClick}>
      {isLoading ? <Loader></Loader> : children}
    </S.Btn>
  );
};
