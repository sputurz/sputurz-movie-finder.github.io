import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';

export const StyledLogoLink = styled(Link)`
  display: flex;
  padding: 7px;
  height: 32px;

  ${vp767(css`
    padding: 8px;
    height: 48px;
  `)}
`;

export const StyledLogoImg = styled.img``;
