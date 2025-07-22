import {
  StyledNav,
  StyledNavLink,
  StyledNavLinkSvg,
  StyledNavLinkText,
} from './Nav.styles';

export function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to={'/'}>
        <StyledNavLinkText>Главная</StyledNavLinkText>
      </StyledNavLink>
      <StyledNavLink to={'/genres'}>
        <StyledNavLinkText>Жанры</StyledNavLinkText>
        <StyledNavLinkSvg name="GenresIcon"></StyledNavLinkSvg>
      </StyledNavLink>
      <span>По</span>
    </StyledNav>
  );
}
