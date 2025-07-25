import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledMovieInfo = styled.div`
  ${vp767(css``)}
`;

export const StyledMovieInfoImg = styled.img`
  /* aspect-ratio: 338/234; */
  width: 100%;
  ${vp767(css``)}
`;

export const StyledMovieInfoWrap = styled.div`
  ${vp767(css``)}
`;

export const StyledMovieInfoTextWrap = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${vp767(css``)}
`;

export const StyledMovieInfoTagText = styled.div`
  display: flex;
  gap: 16px;
  /* flex-wrap: wrap; */

  > span {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${vp767(css``)}
`;

export const StyledMovieInfoYear = styled.span`
  ${vp767(css``)}
`;

export const StyledMovieInfoRuntime = styled.span`
  ${vp767(css``)}
`;

export const StyledMovieInfoGenres = styled.span`
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Скрываем выходящий за границы текст */
  text-overflow: ellipsis; /* Добавляем многоточие */
  /* display: inline-block; Для работы ограничения ширины */
  max-width: 50px; /* Ширина, после которой будет обрезка */

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

// export const StyledMovieInfoBtnUpd = styled.button`
//   ${vp767(css``)}
// `;
