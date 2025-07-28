import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { transitionTransform } from '../../styles/utils/variables';

export const StyledMovieCard = styled(Link)`
  ${transitionTransform}

  position: relative;
  aspect-ratio: 224 / 336;
  display: flex;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  &:hover {
    transform: scale(0.95);
  }
`;

export const StyledMovieCardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const StyledMovieCardRating = styled.span`
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
  background: #ffffff;
  border-radius: 50px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #6a5dc2;
  z-index: 2;
`;
