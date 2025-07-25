import { vpMobile, vpTablet } from './variables';

export const vp767 = (styles) => `
  @media (min-width: ${vpMobile}) {
    ${styles}
  }
`;

export const vp1023 = (styles) => `
  @media (min-width: ${vpTablet}) {
    ${styles}
  }
`;
