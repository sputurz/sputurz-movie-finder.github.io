import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transition } from '../../styles/utils/variables';

export const Wrap = styled.footer`
  padding: 24px 0 36px;

  ${vp767(css`
    padding: 42px 0;
  `)}
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  ${vp767(
    css`
      flex-direction: row;
    `
  )}
`;

export const ThemeBtn = styled.button`
  ${transition('opacity, transform')};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colorText};
  user-select: none;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;

    ${vp767(css`
      width: 36px;
      height: 36px;
    `)}
  }
`;
