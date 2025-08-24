import styled, { css, keyframes } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transitionOpacity } from '../../styles/utils/variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: env(safe-area-inset-top, 20px);
  z-index: 60;
  background-color: ${(props) => props.theme.bgBackdrop};
  backdrop-filter: blur(4px);
  animation: ${({ $isOpen }) => css`
    ${$isOpen ? fadeIn : fadeOut} 0.7s ease forwards
  `};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'auto')};
`;

export const Wrap = styled.div<{ $isOpen: boolean }>`
  box-shadow: 0px 0px 80px 0px ${(props) => props.theme.boxShadows};
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  margin: 20px;
  width: 100%;
  max-height: calc(100vh - 40px);
  z-index: 1;

  animation: ${({ $isOpen }) => ($isOpen ? 'slideUp' : 'slideDown')} 0.7s ease
    forwards;

  ${vp767(
    css`
      width: 420px;
      margin: 20px auto;
    `
  )}

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(60px);
    }
  }
`;

export const Inner = styled.div`
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => props.theme.bgBody};
  color: ${(props) => props.theme.colorModal};
  width: 100%;
  height: 100%;
  padding: 64px 20px 32px;
  overflow-y: auto;

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
      padding: 64px 40px;
    `
  )}
`;

export const BtnAuthType = styled.button`
  ${transitionOpacity}

  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colorModal};

  &:hover {
    opacity: 0.5;
  }
`;

export const BtnClose = styled.button`
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
  overflow: unset;
  color: ${(props) => props.theme.colorModal};

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }

  ${vp767(css`
    color: ${(props) => props.theme.colorModalBtnClose};
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgPrimary};
    top: 0;
    right: -72px;
  `)}
`;

export const SuccsessTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  padding-top: 32px;

  ${vp767(css`
    padding-top: 40px;
  `)}
`;

export const SuccsessText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  padding: 24px 0;
`;
