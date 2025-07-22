import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';
import { transitionOpacity } from '../../styles/utils/variables';

export const StyledLogoLink = styled(Link)`
  ${transitionOpacity}

  display: flex;
  padding: 7px;
  height: 32px;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }

  ${vp767(css`
    padding: 8px;
    height: 48px;
  `)}
`;

export const StyledLogoImg = styled.img``;
