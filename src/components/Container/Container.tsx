import type { FC, ReactNode } from 'react';
import * as S from './Container.styles';

type IProps = {
  children?: ReactNode;
};

export const Container: FC<IProps> = ({ children }) => {
  return <S.Wrap>{children}</S.Wrap>;
};
