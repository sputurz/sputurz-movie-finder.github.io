import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';

export const Wrap = styled.div`
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

export const Genres = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc((115 / 335) * 100%);
  ${vp1023(css`
    max-width: calc((325 / 580) * 100%);
  `)}
`;
