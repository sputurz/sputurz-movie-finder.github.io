import { css } from 'styled-components';
import { transition, transitionBgrColor } from '../utils/variables';

export const BtnPrimaryStyles = css`
  ${transitionBgrColor}

  border: 1px solid ${(props) => props.theme.brdrBtnPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  background-color: ${(props) => props.theme.bgBtnPrimary};
  border-radius: 28px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colorBtnPrimary};
  user-select: none;
  min-height: 58px;
  width: 100%;

  &:focus-visible,
  &:hover {
    background-color: ${(props) => props.theme.bgBtnPrimaryHover};
  }

  &:disabled {
    background-color: ${(props) => props.theme.bgBtnPrimaryDisabled};
    pointer-events: none;
  }
`;

export const BtnAuthStyles = css`
  ${BtnPrimaryStyles}

  &:disabled {
    background-color: ${(props) => props.theme.bgBtnAuthDisabled};
  }
`;

export const BtnSecondaryStyles = css`
  ${BtnPrimaryStyles}
  ${transition('color, border-color, background-color')}

  color: ${(props) => props.theme.colorBtnSecondary};
  background-color: ${(props) => props.theme.bgBtnSecondary};
  border-color: ${(props) => props.theme.brdrBtnSecondary};

  &:focus-visible,
  &:hover {
    color: ${(props) => props.theme.colorBtnSecondaryHover};
    background-color: ${(props) => props.theme.bgBtnSecondaryHover};
    border-color: ${(props) => props.theme.brdrBtnSecondaryHover};
  }

  &:disabled {
    background-color: ${(props) => props.theme.bgBtnSecondaryDisabled};
  }
`;
