import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { NavLinkStyles } from '../../styles/global/NavLink';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.nav`
  display: flex;
  gap: 24px;

  ${vp767(css`
    gap: 64px;
  `)}
`;

export const LinkItem = styled(NavLink)`
  ${NavLinkStyles}

  font-size: 24px;
  line-height: 32px;
  display: flex;
  gap: 4px;

  &.active {
    color: ${(props) => props.theme.colorText};
    border-bottom: 1px solid ${(props) => props.theme.brdrActive};
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:first-child svg {
    color: transparent;
    stroke: ${(props) => props.theme.colorText};
    stroke-width: 1.5;
  }

  ${vp767(
    css`
      gap: 8px;
    `
  )}
`;
