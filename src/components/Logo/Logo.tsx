import { forwardRef } from 'react';
import { StyledLogoImg, StyledLogoLink } from './Logo.styles.ts';

interface IProps {
  src: string;
}

export const Logo = forwardRef<HTMLAnchorElement, IProps>(({ src }, ref) => {
  return (
    <StyledLogoLink to="/" aria-label="Ссылка на главную страницу" ref={ref}>
      <StyledLogoImg src={src} alt="Лого - Маруся" />
    </StyledLogoLink>
  );
});
