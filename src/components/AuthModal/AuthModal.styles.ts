import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transitionOpacity } from '../../styles/utils/variables';

export const StyledAuthModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledAuthModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  margin: auto 20px;
  padding: 64px 20px 32px;
  background-color: #ffffff;
  width: 100%;

  z-index: 1;

  a {
    height: 30px;
    padding: 0;

    ${vp767(
      css`
        height: 35px;
      `
    )}
  }

  ${vp767(
    css`
      width: 420px;
      margin: 0;
      padding: 64px 40px;
    `
  )}
`;

export const StyledAuthModalBtnAuthType = styled.button`
  ${transitionOpacity}

  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #000000;

  &:hover {
    opacity: 0.5;
  }

  ${vp767(css``)}
`;

export const StyledAuthModalBtnClose = styled.button`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  width: 48px;
  height: 48px;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }

  ${vp767(css`
    border-radius: 50%;
    background-color: #ffffff;
    top: 0;
    right: -72px;
  `)}
`;
