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

    background-color: ${(props) => props.theme.bgInput};
    width: 100%;
    border: 1px solid
      ${(props) =>
        props.$isError ? props.theme.brdrInputError : props.theme.brdrInput};
    border-radius: 8px;
    padding: 16px 36px 16px 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.colorInput};
  }

  & > input::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.colorInput40};
  }

  &:focus-within > input,
  &:focus-within > textarea {
    outline: none;
    border-color: ${(props) => props.theme.brdrInputHover};
  }

  &:hover > input,
  &:hover > textarea {
    border-color: ${(props) => props.theme.brdrInputHover};
  }

  & > svg {
    ${transitionColor}

    color: ${(props) =>
      props.$isError ? props.theme.colorInputError : props.theme.colorInput40};
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    left: 16px;
  }

  &:hover > svg,
  &:focus-within > svg {
    color: ${(props) => props.theme.colorInputHover};
  }
`;

export const ErrorText = styled.span<{ $isError?: boolean }>`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colorInputError};
`;
