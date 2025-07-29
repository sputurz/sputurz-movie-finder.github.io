// import { useState } from 'react';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { StyledHeader, StyledHeaderWrap } from './Header.styles';
// import { AuthModal } from '../AuthModal';

export function Header() {
  // const [isShown, setIsShown] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo src={'/logoBlack.svg'}></Logo>
          <Nav></Nav>
          {/* <button onClick={() => setIsShown(true)}>Показать модалку</button>
          {isShown && <AuthModal></AuthModal>} */}
        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  );
}
