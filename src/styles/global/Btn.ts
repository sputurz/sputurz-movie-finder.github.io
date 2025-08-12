import { css } from 'styled-components';
import {
  transitionBgrColor,
  transitionBorderColor,
  transitionColor,
  transitionOpacity,
} from '../utils/variables';

export const BtnPrimaryStyles = css`
  ${transitionOpacity}
  border: 1px solid var(--brdr-btn-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  background: var(--bg-btn-primary);
  border-radius: 28px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-text);
  user-select: none;
  min-height: 58px;
  width: 100%;

  &:focus-visible,
  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background: var(--bg-btn-primary-disabled);
    color: var(--color-text-50);
    pointer-events: none;
  }
`;

export const BtnAuthStyles = css`
  ${BtnPrimaryStyles}

  &:disabled {
    background: var(--bg-btn-auth-disabled);
  }
`;

export const BtnSecondaryStyles = css`
  ${BtnPrimaryStyles}
  ${transitionColor}
  ${transitionBorderColor}
  ${transitionBgrColor}

  background:   var(--bg-btn-secondary);
  border-color: var(--brdr-btn-secondary);

  &:focus-visible,
  &:hover {
    color: var(--color-btn-secondary-hover);
    background-color: var(--bg-btn-secondary-hover);
    border-color: var(--brdr-btn-secondary-hover);
    opacity: unset;
  }

  &:disabled {
    background: var(--bg-btn-secondary-disabled);
  }
`;
