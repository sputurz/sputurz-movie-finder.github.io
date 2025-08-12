import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import {
  transitionOpacity,
  transitionTransform,
} from '../../styles/utils/variables';

export const Wrap = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
  padding: 0 0 12px;
  margin: 0;
  justify-content: flex-start;

  ${vp767(css`
    justify-content: flex-end;
    padding: 2px 0;
  `)}
`;

export const Item = styled.li`
  width: 24px;
  height: 24px;

  ${vp767(css`
    width: 36px;
    height: 36px;
  `)}
`;

export const LinkItem = styled.a`
  ${transitionOpacity}
  ${transitionTransform}

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: var(--color-text);
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
