import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(
    css`
      gap: 64px;
    `
  )}

  button {
    ${vp767(
      css`
        width: 262px;
      `
    )}
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(css``)}
`;

export const ListItem = styled.li`
  display: flex;
  gap: 16px;

  ${vp767(css``)}
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${vp767(css``)}
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--bg-setting-label);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.colorText};

  & svg {
    width: 24px;
    height: 24px;
  }

  ${vp767(css`
    width: 60px;
    height: 60px;
  `)}
`;

export const TagKey = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-text-50);

  ${vp767(css`
    font-size: 18px;
    line-height: 24px;
  `)}
`;

export const TagValue = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colorText};

  ${vp767(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;
