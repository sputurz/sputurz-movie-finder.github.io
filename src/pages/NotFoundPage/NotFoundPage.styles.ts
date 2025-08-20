import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const Wrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  a {
    align-self: center;
  }

  img {
    height: 30px;
  }

  ${vp767(
    css`
      margin-top: 64px;
      gap: 64px;

      img {
        height: 60px;
      }
    `
  )}
`;

export const Title = styled.h1`
  text-align: center;
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
`;
