import { css } from 'styled-components';

export const ColorsStyle = css`
  :root {
    /* bg */
    --bg-primary: #ffffff;
    --bg-secondary: #393b3c;

    /* color */
    --color-error: #dc3545;
    --color-text: #ffffff;
    --color-input-hover: #b4a9ff;
    --color-like: #b4a9ff;
    --color-text-40: rgba(255, 255, 255, 0.4);
    --color-text-50: rgba(255, 255, 255, 0.5);
    --color-text-70: rgba(255, 255, 255, 0.7);

    /* btn */
    --brdr-btn-primary: transparent;
    --brdr-btn-secondary: rgba(0, 0, 0, 0.4);
    --brdr-btn-secondary-hover: #ffffff;
    --bg-btn-primary: #67a5eb;
    --bg-btn-secondary: #393b3c;
    --bg-btn-secondary-hover: #ffffff;
    --bg-btn-primary-disabled: rgba(255, 255, 255, 0.5);
    --bg-btn-auth-disabled: rgba(103, 165, 235, 0.5);
    --bg-btn-secondary-disabled: #747474;
    --color-btn-secondary-hover: #000000;
  }
`;
