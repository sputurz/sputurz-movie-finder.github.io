import { css } from 'styled-components';

export const ColorsStyle = css`
  :root {
    /* background-color */
    --bg-primary: #ffffff;
    --bg-secondary: #393b3c;
    --bg-genre-card: #0a0b0b;
    --bg-backdrop: rgba(0, 0, 0, 0.5);
    --bg-setting-label: rgba(255, 255, 255, 0.5);

    /* text/svg color */
    --color-error: #dc3545;
    --color-text: #ffffff;
    --color-text-inverse: #000000;
    --color-like: #b4a9ff;
    --color-active: #b4a9ff;
    --color-top: #6a5dc2;
    --color-text-40: rgba(255, 255, 255, 0.4);
    --color-text-50: rgba(255, 255, 255, 0.5);
    --color-text-70: rgba(255, 255, 255, 0.7);

    /* border-color */
    --brdr-active: #dc5dfc;
    --brdr-card: rgba(255, 255, 255, 0.25);
    --brdr-video: rgba(255, 255, 255, 0.5);
    --brdr-search: rgba(255, 255, 255, 0.5);

    /* shadow */
    --box-shadows: rgba(255, 255, 255, 0.33);

    /* loader */
    --brdr-loader: #838383;
    --brdr-loader-bottom: #ffffff;

    /* input */
    --brdr-input: rgba(0, 0, 0, 0.4);
    --brdr-input-error: #dc3545;
    --brdr-input-hover: #b4a9ff;
    --color-input: #000000;
    --color-input-40: rgba(0, 0, 0, 0.4);
    --color-input-error: #dc3545;
    --color-input-hover: #b4a9ff;

    /* btn */
    --brdr-btn-primary: transparent;
    --brdr-btn-secondary: rgba(0, 0, 0, 0.4);
    --brdr-btn-secondary-hover: #ffffff;
    --bg-btn-primary: #67a5eb;
    --bg-btn-secondary: #393b3c;
    --bg-btn-next: #6a5dc2;
    --bg-btn-primary-hover: rgba(103, 165, 235, 0.5);
    --bg-btn-secondary-hover: #ffffff;
    --bg-btn-primary-disabled: rgba(255, 255, 255, 0.5);
    --bg-btn-auth-disabled: rgba(103, 165, 235, 0.5);
    --bg-btn-secondary-disabled: #747474;
    --color-btn-secondary-hover: #000000;

    /* rating-bg */
    --bg-rating-1: #a59400;
    --bg-rating-2: #308e21;
    --bg-rating-3: #777777;
    --bg-rating-4: #c82020;
  }
`;
