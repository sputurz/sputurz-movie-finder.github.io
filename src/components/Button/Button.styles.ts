import styled from 'styled-components';
import {
  BtnAuthStyles,
  BtnPrimaryStyles,
  BtnSecondaryStyles,
} from '../../styles/global/Btn';

const kindStyles = {
  primary: BtnPrimaryStyles,
  secondary: BtnSecondaryStyles,
  auth: BtnAuthStyles,
};

export const Btn = styled.button<{ $kind?: keyof typeof kindStyles }>`
  ${({ $kind }) => kindStyles[$kind || 'primary']}

  position: relative;
`;
