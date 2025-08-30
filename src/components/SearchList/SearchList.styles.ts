import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { animationFade } from '../../styles/utils/variables';

export const Wrap = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style-type: none;
  position: absolute;
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 8px;
  z-index: 40;
  width: 100%;
  top: 58px;
  left: 0;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  padding: 0 20px;

  ${(props) => animationFade(props.$isOpen)};

  &::-webkit-scrollbar {
    display: none;
  }

  ${vp767(css`
    flex-direction: column;
    top: 62px;
    left: 0;
    padding: 0 8px;
    overflow-x: unset;

    scrollbar-width: unset;
    &::-webkit-scrollbar {
      display: unset;
    }
  `)}

  @media (min-width: 1200px) {
    margin: 0 0 0 96px;
    width: calc(100% - 96px);
  }
`;

export const ListItem = styled.li`
  width: 220px;
  padding: 24px 0;

  ${vp767(css`
    width: 100%;
    padding: 0;

    &:first-child {
      padding-top: 8px;
    }

    &:last-child {
      padding-bottom: 8px;
    }
  `)}
`;

export const Inner = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  ${vp767(css``)}
`;

export const Error = styled.span`
  color: ${(props) => props.theme.colorText};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  ${vp767(css``)}
`;
