import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transitionOpacity } from '../../styles/utils/variables';

export const StyledSearchBtnMobile = styled.button`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px 0;
  background-color: transparent;

  svg {
    color: #ffffff;
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledSearchDesktop = styled.label`
  ${vp767(css`
    position: relative;
    display: flex;
    width: 100%;

    & > input {
      width: 100%;
      caret-color: #ffffff;
      color: #ffffff;
      background: #393b3c;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 12px 16px 12px 52px;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
    }

    & > input ::placeholder {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.5);
    }

    &:focus-within > input,
    &:focus-within > textarea {
      outline: none;
      border-color: #b4a9ff;
    }

    &:hover > input,
    &:hover > textarea {
      border-color: #b4a9ff;
    }

    & > svg {
      color: rgba(255, 255, 255, 0.5);
      position: absolute;
      width: 24px;
      height: 24px;
      top: 12px;
      left: 16px;
    }

    &:focus-within > svg,
    &:hover > svg {
      color: #b4a9ff;
    }
  `)}
`;
