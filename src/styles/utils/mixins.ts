import { css, RuleSet } from 'styled-components';
import { vpMobile, vpTablet } from './variables';

// Viewport
export const vp767 = (styles: RuleSet<object>) => css`
  @media (min-width: ${vpMobile}) {
    ${styles}
  }
`;

export const vp1023 = (styles: RuleSet<object>) => css`
  @media (min-width: ${vpTablet}) {
    ${styles}
  }
`;
