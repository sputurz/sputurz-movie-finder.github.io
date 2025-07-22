import { css } from 'styled-components';
import { vp767 } from '../utils/mixins';
import { transitionBorderColor, transitionColor } from '../utils/variables';

export const NavLinkStyles = css`
  ${transitionBorderColor}
  ${transitionColor}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    color: #b4a9ff;
  }

  &:active {
    color: #b4a9ff;
  }

  ${vp767(css`
    font-size: 24px;
    line-height: 32px;
    border-bottom: 1px solid transparent;
    opacity: 1;

    &:hover {
      color: #ffffff;
      border-bottom: 1px solid rgba(151, 71, 255, 1);
    }

    &:active {
      color: #ffffff;
      border-bottom: 1px solid rgba(151, 71, 255, 1);
    }
  `)}
`;
