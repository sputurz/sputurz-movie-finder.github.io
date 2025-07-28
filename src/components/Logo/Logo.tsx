import { StyledLogoImg, StyledLogoLink } from './Logo.styles';

interface IProps {
  src: string;
}

export function Logo({ src }: IProps) {
  return (
    <StyledLogoLink to={'/'} aria-label="Ссылка на главную страницу">
      <StyledLogoImg src={src} alt="Лого - Маруся" />
    </StyledLogoLink>
  );
}
