import { useAppDispatch } from '../../store/hooks';
import { openAuthModal } from '../AuthModal/AuthModalSlice';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { StyledHeader, StyledHeaderWrap } from './Header.styles';

export function Header() {
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo src={'/logoBlack.svg'}></Logo>
          <Nav></Nav>
          <button onClick={() => dispatch(openAuthModal())}>
            Показать модалку
          </button>
        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  );
}
