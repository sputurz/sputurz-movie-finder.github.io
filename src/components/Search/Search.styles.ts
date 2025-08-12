import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transitionOpacity } from '../../styles/utils/variables';

export const BtnMobile = styled.button`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px 0;
  background-color: transparent;

  svg {
    color: var(--color-text);
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
  position: ${(props) => (props.$isMobileSearch ? 'absolute' : 'fixed')};
  inset: 0;
  background-color: ${(props) =>
    props.$isMobileSearch ? 'var(--bg-backdrop)' : 'transparent'};
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
    width: 100%;
    caret-color: var(--color-text);
    color: var(--color-text);
    background: var(--bg-secondary);
    border: 1px solid transparent;
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
    color: var(--color-text-50);
  }

  &:focus-within > input,
  &:focus-within > textarea {
    outline: none;
    border-color: var(--color-input-hover);
  }

  &:hover > input,
  &:hover > textarea {
    border-color: var(--color-input-hover);
  }

  & > svg {
    color: var(--color-text-50);
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    left: 16px;
  }

  &:focus-within > svg,
  &:hover > svg {
    color: var(--color-input-hover);
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
    color: var(--color-text-50);
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ResultList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style-type: none;
  position: absolute;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  z-index: 40;
  width: 100%;
  padding: 24px 20px;
  top: 58px;
  left: 0;
  flex-wrap: nowrap;

  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${vp767(css`
    flex-direction: column;
    top: 62px;
    left: 0;
    padding: 8px;
    overflow-x: unset;

    scrollbar-width: unset;
    &::-webkit-scrollbar {
      display: unset;
    }
  `)}

  @media (min-width: 1200px) {
    margin: 0 0 0 96px;
    width: calc(100% - 96px);
  }
`;

export const ResultItem = styled.li`
  width: 220px;

  ${vp767(css`
    width: 100%;
  `)}
`;
