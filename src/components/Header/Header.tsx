import { useState } from 'react';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { StyledHeader, StyledHeaderWrap } from './Header.styles';
import { AuthModal } from '../AuthModal';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo src={'/logoBlack.svg'}></Logo>
          <Nav></Nav>
          <button onClick={() => setIsOpen(true)}>войти</button>
          {isOpen && <AuthModal></AuthModal>}
        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  );
}
