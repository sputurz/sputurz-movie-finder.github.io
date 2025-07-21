import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledByGenrePage = styled.section`
  margin: 40px 0;

  ${vp767(css`
    margin: 64px 0 160px;
  `)}
`;

export const StyledByGenrePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(css`
    gap: 64px;
  `)}
`;

export const StyledByGenrePageTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${vp767(css`
    font-size: 48px;
    line-height: 56px;
  `)}
`;

export const StyledByGenrePageList = styled.ul`
  height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${vp767(css`
    gap: 64px 40px;
    /* grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); */
    grid-template-columns: repeat(5, 224px);
  `)}
`;

export const StyledByGenrePageItem = styled.li``;

export const StyledByGenrePageCard = styled.a`
  width: 100%;
  aspect-ratio: 333 / 500;
  display: flex;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
`;

export const StyledByGenrePageCardImg = styled.img`
  width: 100%;
  border-radius: 16px;
`;
