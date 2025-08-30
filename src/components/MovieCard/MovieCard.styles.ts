import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  transitionOpacity,
  transitionTransform,
} from '../../styles/utils/variables';
import { vp767 } from '../../styles/utils/mixins';

export const Card = styled.div`
  ${transitionTransform}

  position: relative;
  aspect-ratio: 224 / 336;
  display: flex;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.brdrCard};
  box-shadow: 0px 0px 80px 0px ${(props) => props.theme.boxShadows};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }

  button {
    display: none;
  }

  &:hover button,
  &:focus-within button {
    display: flex;
  }

  ${vp767(css`
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  `)}
`;

export const LinkItem = styled(Link)`
  ${transitionTransform}
  position: relative;

  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const Rating = styled.span`
  user-select: none;
  width: 62px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  left: -12px;
  top: -12px;
  background: ${(props) => props.theme.bgPrimary};
  border-radius: 50px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.colorTop};
  z-index: 2;
`;

export const BtnDelete = styled.button`
  ${transitionOpacity}

  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgPrimary};

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const ErrorText = styled.span`
  position: absolute;
  display: flex;
  text-align: center;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colorText};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;
