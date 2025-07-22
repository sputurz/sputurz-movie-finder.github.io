import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledHeader = styled.header`
  padding: 16px 0;

  ${vp767(css`
    padding: 24px 0;
  `)}
`;

export const StyledHeaderWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 20px;
  ${vp767(css`
    grid-template-columns: auto 1fr auto;
    gap: 80px;
  `)}
`;
