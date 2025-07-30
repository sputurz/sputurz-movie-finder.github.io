import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { NavLink } from 'react-router-dom';
import { NavLinkStyles } from '../../styles/global/NavLink';
import { Icon } from '../Icon';

export const StyledNav = styled.nav`
  & > :first-child {
    display: none;
  }

  display: grid;
  gap: 20px;
  grid-template-columns: auto auto;

  ${vp767(css`
    & > :first-child {
      display: grid;
    }

    gap: 20px;
    grid-template-columns: auto auto 1fr;
  `)}
`;

export const StyledNavLink = styled(NavLink)`
  ${NavLinkStyles}

  padding: 0;

  & > svg {
    width: 24px;
    height: 24px;

    ${vp767(
      css`
        display: none;
      `
    )}
  }

  ${vp767(
    css`
      padding: 8px 0;
    `
  )}
`;

export const StyledNavLinkText = styled.span`
  display: none;
  ${vp767(
    css`
      display: unset;
    `
  )}
`;

export const StyledNavLinkSvg = styled(Icon)``;
