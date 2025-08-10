import { css } from 'styled-components';
import {
  transitionBgrColor,
  transitionBorderColor,
  transitionColor,
  transitionOpacity,
} from '../utils/variables';

export const BtnPrimaryStyles = css`
  ${transitionOpacity}
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  background: #67a5eb;
  border-radius: 28px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  user-select: none;
  min-height: 58px;
  width: 100%;

  &:focus-visible,
  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }
`;

export const BtnAuthStyles = css`
  ${BtnPrimaryStyles}

  &:disabled {
    background: rgba(103, 165, 235, 0.5);
  }
`;

export const BtnSecondaryStyles = css`
  ${BtnPrimaryStyles}
  ${transitionColor}
  ${transitionBorderColor}
  ${transitionBgrColor}

  background:   #393b3c;
  border-color: rgba(0, 0, 0, 0.4);

  &:focus-visible,
  &:hover {
    color: #000000;
    background-color: #ffffff;
    border-color: #ffffff;
    opacity: unset;
  }

  &:disabled {
    background: #747474;
  }
`;
