import { Container } from '../Container';
import * as S from './ErrorFallback.styles';
import type { FC, ReactNode } from 'react';

type IProps = {
  children?: ReactNode;
};

export const ErrorFallback: FC<IProps> = ({ children }) => {
  return (
    <Container>
      <S.Text>{children}</S.Text>
    </Container>
  );
};
