import { StyledLogoImg, StyledLogoLink } from './Logo.styles';

export function Logo() {
  return (
    <StyledLogoLink to={'/'} aria-label="Ссылка на главную страницу">
      <StyledLogoImg src="/logo.svg" alt="Лого - Маруся" />
    </StyledLogoLink>
  );
}
