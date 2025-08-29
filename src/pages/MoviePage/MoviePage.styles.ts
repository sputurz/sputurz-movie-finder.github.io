import styled, { css } from 'styled-components';
import { VisuallyHidden } from '../../styles/utils/VisuallyHidden';
import { vp767 } from '../../styles/utils/mixins';

export const Title = styled.h1`
  ${VisuallyHidden}
`;

export const Error = styled.h1`
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
