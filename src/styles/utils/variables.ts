import { css, keyframes } from 'styled-components';
import Keyframes from 'styled-components/dist/models/Keyframes';

// Viewport
export const vpMobile = `767px`;
export const vpTablet = `1023px`;

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const slideDown = keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(60px);
    }
  `;

export const animation = (
  flag: boolean,
  start: Keyframes,
  end: Keyframes
) => css`
  animation: ${flag ? start : end} 0.7s ease forwards;
`;

export const animationFade = (flag: boolean) => css`
  ${animation(flag, fadeIn, fadeOut)}
`;

export const animationSlide = (flag: boolean) => css`
  ${animation(flag, slideUp, slideDown)}
`;

// Transition
export const transition = (property: string) => css`
  transition: ${property} ease-in 0.3s;
`;
export const transitionOpacity = css`
  ${transition('opacity')}
`;
export const transitionTransform = css`
  ${transition('transform')}
`;
export const transitionColor = css`
  ${transition('color')}
`;
export const transitionBorderColor = css`
  ${transition('border-color')}
`;
export const transitionBgrColor = css`
  ${transition('background-color')}
`;
