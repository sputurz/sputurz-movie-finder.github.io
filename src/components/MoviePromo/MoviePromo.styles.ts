import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';
import { ImageLoader } from '../ImageLoader';
import { BtnSecondaryStyles } from '../../styles/global/Btn';

export const Inner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;

  ${vp1023(
    css`
      grid-template-columns: 1fr minmax(0, calc(680 / 1280 * 100%));
      grid-template-areas: 'content image';
      align-items: start;
      gap: 0;
      padding-top: 32px;
    `
  )}
`;

export const ImgWrap = styled(ImageLoader)`
  img {
    width: 100%;
    border-radius: 16px;
  }

  ${vp1023(
    css`
      grid-area: image;
    `
  )}
`;

export const Wrap = styled.div<{ $isAboutMovie?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${vp1023(css`
    grid-area: content;
    padding: 74px 20px 0 0;
    grid-column: 1;
    grid-row: 1;
  `)}

  ${({ $isAboutMovie }) =>
    !$isAboutMovie &&
    vp1023(css`
      height: 550px;
      justify-content: space-between;
    `)}
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${vp1023(css`
    gap: 16px;
  `)}
`;

export const Tag = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.colorText70};
  }

  ${vp767(css`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`;

export const Title = styled.h2<{ $isAboutMovie?: boolean }>`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.colorText};

  ${vp767(css`
    font-size: 48px;
    line-height: 56px;
  `)}

  ${({ $isAboutMovie }) =>
    !$isAboutMovie &&
    vp767(css`
      max-height: 120px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`;

export const Plot = styled.p<{ $isAboutMovie?: boolean }>`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colorText70};

  ${vp767(css`
    font-size: 24px;
    line-height: 32px;
  `)}

  ${({ $isAboutMovie }) =>
    !$isAboutMovie &&
    vp767(css`
      max-height: 96px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`;

export const BtnWrap = styled.div<{ $isAboutMovie?: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;

  grid-template-columns: ${(props) =>
    props.$isAboutMovie ? '1fr auto' : '1fr auto auto'};

  & > button:first-child {
    grid-column: ${(props) => (props.$isAboutMovie ? 'span 1' : 'span 3')};
  }
`;

export const LinkItem = styled(Link)<{
  $iSdisabled?: boolean;
}>`
  ${BtnSecondaryStyles}

  ${({ $iSdisabled }) =>
    $iSdisabled &&
    css`
      color: ${(props) => props.theme.colorText50}
      pointer-events: none;
      background-color: ${(props) => props.theme.bgBtnSecondaryDisabled};
    `}
`;

export const BtnLike = styled.button<{ $isLiked?: boolean }>`
  ${BtnSecondaryStyles}

  svg {
    color: ${({ $isLiked, theme }) =>
      $isLiked ? theme.colorLike : 'transparent'};
    stroke: ${({ $isLiked, theme }) =>
      $isLiked ? 'transparent' : theme.colorText};
    stroke-width: 1.5;
  }

  &:focus-visible svg,
  &:hover svg {
    stroke: ${({ $isLiked, theme }) =>
      $isLiked ? 'transparent' : theme.colorTextInverse};
    color: ${({ $isLiked, theme }) =>
      $isLiked ? theme.colorLike : 'transparent'};
  }
`;
