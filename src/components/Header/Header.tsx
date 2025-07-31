import { NavLink } from 'react-router-dom';
import {
  selectIsAuthenticated,
  selectUser,
} from '../../store/globalSlices/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { openAuthModal } from '../AuthModal/AuthModalSlice';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { StyledHeader, StyledHeaderWrap } from './Header.styles';

export function Header() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo src={'/logoBlack.svg'}></Logo>
          <Nav></Nav>
          {isAuthenticated ? (
            <NavLink to={'/profile'}>{user?.name}</NavLink>
          ) : (
            <button onClick={() => dispatch(openAuthModal())}>Войти</button>
          )}
        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  );
}
