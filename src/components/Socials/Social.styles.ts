import styled from "styled-components";
import { vp767 } from '../../styles/utils/mixins';

export const StyledSocials = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: flex-start;

  ${vp767(`
    justify-content: flex-end;
  `)}
`;

export const StyledSocialItem = styled.li`
  width: 24px;
  height: 24px;
`;

export const StyledLink = styled.a`
  display: block;
   line-height: 0
`;