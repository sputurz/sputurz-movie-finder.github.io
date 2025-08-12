import styled from 'styled-components';
import {
  transitionBorderColor,
  transitionColor,
} from '../../styles/utils/variables';

export const Label = styled.label<{ $isError?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > input,
  & > textarea {
    ${transitionBorderColor}

    background-color: transparent;
    width: 100%;
    border: 1px solid
      ${(props) =>
        props.$isError ? 'var(--brdr-input-error)' : 'var(--brdr-input)'};
    border-radius: 8px;
    padding: 16px 16px 16px 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--color-input);
  }

  & > input::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--color-input-40);
  }

  &:focus-within > input,
  &:focus-within > textarea {
    outline: none;
    border-color: var(--brdr-input-hover);
  }

  &:hover > input,
  &:hover > textarea {
    border-color: var(--brdr-input-hover);
  }

  & > svg {
    ${transitionColor}

    color: ${(props) =>
      props.$isError ? 'var(--color-input-error)' : 'var(--color-input-40)'};
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    left: 16px;
  }

  &:hover > svg,
  &:focus-within > svg {
    color: var(--color-input-hover);
  }
`;

export const ErrorText = styled.span<{ $isError?: boolean }>`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-input-error);
`;
