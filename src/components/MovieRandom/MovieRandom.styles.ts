import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';

export const StyledRandom = styled.section``;

export const StyledRandomWrap = styled.div`
  ${vp767(css``)}
`;

export const StyledRandomImg = styled.img`
  width: 50px;
  height: 50px;
  ${vp767(css``)}
`;

export const StyledRandomRating = styled.span`
  ${vp767(css``)}
`;

export const StyledRandomYear = styled.span`
  ${vp767(css``)}
`;

export const StyledRandomGenres = styled.ul`
  ${vp767(css``)}
`;

export const StyledRandomGenre = styled.li`
  ${vp767(css``)}
`;

export const StyledRandomRuntime = styled.span`
  ${vp767(css``)}
`;

export const StyledRandomTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${vp767(css`
    font-size: 48px;
    line-height: 56px;
  `)}
`;

export const StyledRandomPlot = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);

  ${vp767(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;

export const StyledRandomBtnUpd = styled.button`
  ${vp767(css``)}
`;

export const StyledRandomLink = styled(Link)`
  ${vp767(css``)}
`;

export const StyledRandomBtnFav = styled.button`
  ${vp767(css``)}
`;

export const StyledRandomBtnVideo = styled.button`
  ${vp767(css``)}
`;
