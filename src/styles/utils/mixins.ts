import { vpMobile } from "./variables"

export const vp767 = (styles) => `
  @media (min-width: ${vpMobile}) {
    ${styles}
  }
`;