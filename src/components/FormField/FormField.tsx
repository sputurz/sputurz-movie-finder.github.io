import { FC, ReactNode } from 'react';
import { StyledFormField } from './FormField.styles';

interface IProps {
  children: ReactNode;
  isError?: boolean;
}

export const FormField: FC<IProps> = ({ children, isError }) => {
  return <StyledFormField $isError={isError}>{children}</StyledFormField>;
};
