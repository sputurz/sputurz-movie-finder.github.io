import { Container } from '../Container';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { StyledHeader, StyledHeaderWrap } from './Header.styles';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo></Logo>
          <Nav></Nav>
          <span>во</span>
        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  );
}
