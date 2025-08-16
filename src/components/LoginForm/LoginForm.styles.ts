import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px 0 24px;

  ${vp767(css`
    padding-top: 40px;
  `)}
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colorError};
`;
