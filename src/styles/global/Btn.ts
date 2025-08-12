import { css } from 'styled-components';
import { transition, transitionBgrColor } from '../utils/variables';

export const BtnPrimaryStyles = css`
  ${transitionBgrColor}

  border: 1px solid var(--brdr-btn-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  background-color: var(--bg-btn-primary);
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
    background-color: var(--bg-btn-primary-hover);
  }

  &:disabled {
    background-color: var(--bg-btn-primary-disabled);
    color: var(--color-text-50);
    pointer-events: none;
  }
`;

export const BtnAuthStyles = css`
  ${BtnPrimaryStyles}

  &:disabled {
    background-color: var(--bg-btn-auth-disabled);
  }
`;

export const BtnSecondaryStyles = css`
  ${BtnPrimaryStyles}
  ${transition('color, border-color, background-color')}

  background-color: var(--bg-btn-secondary);
  border-color: var(--brdr-btn-secondary);

  &:focus-visible,
  &:hover {
    color: var(--color-btn-secondary-hover);
    background-color: var(--bg-btn-secondary-hover);
    border-color: var(--brdr-btn-secondary-hover);
  }

  &:disabled {
    background-color: var(--bg-btn-secondary-disabled);
  }
`;
