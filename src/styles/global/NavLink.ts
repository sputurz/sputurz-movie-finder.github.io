import { css, keyframes } from 'styled-components';
import { vp767 } from '../utils/mixins';
import { transitionOpacity } from '../utils/variables';

const fadeBorder = keyframes`
  from {
    border-bottom-color: transparent;
  }
  to {
    border-bottom-color: ${(props) => props.theme.brdrActive};
  }
`;

export const NavLinkStyles = css`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colorText};
  z-index: 15;
  border-bottom: 1px solid transparent;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    color: ${(props) => props.theme.colorActive};
    animation: ${fadeBorder} 0.7s ease-in forwards;
  }

  ${vp767(css`
    padding: 8px 0;
    font-size: 24px;
    line-height: 32px;
    border-bottom: 1px solid transparent;
    opacity: 1;

    &.active {
      color: ${(props) => props.theme.colorText};
      border-bottom: 1px solid ${(props) => props.theme.brdrActive};
    }
  `)}
`;
