import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px 0 24px;

  ${vp767(css`
    padding-top: 40px;
  `)}
`;

export const StyledLoginFormBtn = styled.button`
  ${BtnPrimaryStyles}

  width: 100%;
  ${vp767(css``)}
`;
