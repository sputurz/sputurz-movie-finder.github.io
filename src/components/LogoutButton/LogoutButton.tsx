import type { FC, ReactNode } from 'react';
import { StyleContainer } from './LogoutButton.styles';

type Props = {
  children?: ReactNode;
};

export const LogoutButton: FC<Props> = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>;
};
