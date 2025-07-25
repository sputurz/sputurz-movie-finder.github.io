import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';
import { BtnSecondaryStyles } from '../../styles/global/BtnSecondary';

export const StyledMovieInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${vp767(
    css`
      padding-top: 32px;
      grid-template-columns: 1fr calc(680 / 1280 * 100%);
      gap: 0;
    `
  )}
`;

export const StyledMovieInfoImg = styled.img`
  border-radius: 16px;
  width: 100%;

  ${vp767(
    css`
      grid-column: 2;
    `
  )}
`;

export const StyledMovieInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${vp767(
    css`
      padding: 74px 20px 0 0;
      grid-column: 1;
      grid-row: 1;
    `
  )}
`;

export const StyledMovieInfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${vp767(css`
    gap: 16px;
  `)}
`;

export const StyledMovieInfoTagText = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${vp767(css`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`;

export const StyledMovieInfoYear = styled.span`
  ${vp767(css``)}
`;

export const StyledMovieInfoRuntime = styled.span`
  ${vp767(css``)}
`;

export const StyledMovieInfoGenres = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc((115 / 335) * 100%);
  ${vp767(css``)}
`;

export const StyledMovieInfoTitle = styled.h2`
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

export const StyledMovieInfoPlot = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);

  ${vp767(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;

export const StyledMovieInfoBtnWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;

  ${vp767(css``)}
`;

export const StyledMovieInfoBtnUpd = styled.button`
  ${BtnSecondaryStyles}

  grid-column:span 3;
  ${vp767(css``)}
`;

export const StyledMovieInfoBtnAbout = styled.button`
  ${BtnSecondaryStyles}

  ${vp767(css``)}
`;

export const StyledMovieInfoBtnLike = styled.button<{ $isLiked?: boolean }>`
  ${BtnSecondaryStyles}

  svg {
    width: 24px;
    height: 24px;

    color: ${({ $isLiked }) => ($isLiked ? '#B4A9FF' : 'transparent')};
    stroke: ${({ $isLiked }) => ($isLiked ? 'transparent' : '#ffffff')};
    stroke-width: 1.5;
  }

  &:focus-visible svg,
  &:hover svg {
    stroke: ${({ $isLiked }) => ($isLiked ? 'transparent' : '#0c0707ff')};
    color: ${({ $isLiked }) => ($isLiked ? '#B4A9FF' : 'transparent')};
  }
`;
