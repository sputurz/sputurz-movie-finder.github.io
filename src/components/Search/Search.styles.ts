import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import {
  transitionBorderColor,
  transitionOpacity,
} from '../../styles/utils/variables';

export const BtnMobile = styled.button`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px 0;
  background-color: transparent;

  svg {
    color: ${(props) => props.theme.colorText};
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }

  ${vp767(css`
    display: none;
  `)}
`;

export const Backdrop = styled.div<{ $isMobileSearch?: boolean }>`
  position: fixed;
  inset: 0;
  background-color: ${(props) =>
    props.$isMobileSearch ? props.theme.bgBackdrop : 'transparent'};
  z-index: 49;
  pointer-events: ${(props) => (props.$isMobileSearch ? 'unset' : 'none')};
`;

export const Wrap = styled.label<{ $isMobileSearch?: boolean }>`
  position: absolute;
  display: ${(props) => (props.$isMobileSearch ? 'flex' : 'none')};
  top: 12px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 50;

  & > input {
    ${transitionBorderColor}

    width: 100%;
    caret-color: ${(props) => props.theme.colorText};
    color: ${(props) => props.theme.colorText};
    background: ${(props) => props.theme.bgSecondary};
    border: 1px solid ${(props) => props.theme.brdrSearch};
    border-radius: 8px;
    padding: 12px 52px 12px 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }

  & > input::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.colorText50};
  }

  &:focus-within > input,
  &:focus-within > textarea {
    outline: none;
    border-color: ${(props) => props.theme.colorInputHover};
  }

  &:hover > input,
  &:hover > textarea {
    border-color: ${(props) => props.theme.colorInputHover};
  }

  & > svg {
    color: ${(props) => props.theme.colorText50};
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    left: 16px;
  }

  &:focus-within > svg,
  &:hover > svg {
    color: ${(props) => props.theme.colorInputHover};
  }

  ${vp767(css`
    position: relative;
    display: flex;
    width: 100%;
    top: unset;
    left: unset;
  `)}
`;

export const BtnReset = styled.button<{ $isEmpty?: boolean }>`
  ${transitionOpacity}

  display: ${(props) => (props.$isEmpty ? 'none' : 'flex')};

  position: absolute;
  top: 12px;
  right: 16px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;

  svg {
    color: ${(props) => props.theme.colorText50};
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
