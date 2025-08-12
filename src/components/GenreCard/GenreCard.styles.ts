import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';
import { transitionTransform } from '../../styles/utils/variables';

export const LinkItem = styled(Link)`
  ${transitionTransform}

  height: 100%;
  background-color: var(--bg-genre-card);
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid var(--brdr-card);
  box-shadow: 0px 0px 80px 0px var(--box-shadows);

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(220 / 335 * 100%);
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  background-color: var(--bg-secondary);

  ${vp767(css`
    padding-top: calc(220 / 290 * 100%);
  `)}
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: var(--color-text);
  text-align: center;
  padding: 22px 0 30px;
`;
