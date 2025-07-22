import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledSocials = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  padding: 0 0 12px;
  margin: 0;
  justify-content: flex-start;

  ${vp767(css`
    justify-content: flex-end;
    padding: 2px 0;
  `)}
`;

export const StyledSocialItem = styled.li`
  width: 24px;
  height: 24px;

  ${vp767(css`
    width: 36px;
    height: 36px;
  `)}
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 100%;
    height: 100%;
  }
`;
