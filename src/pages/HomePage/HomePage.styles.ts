import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { VisuallyHidden } from '../../styles/utils/VisuallyHidden';

export const StyledHomePageTitle = styled.h1`
  ${VisuallyHidden}
`;

export const StyledRandom = styled.section`
  ${vp767(css``)}
`;
