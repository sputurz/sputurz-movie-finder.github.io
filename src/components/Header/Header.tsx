import {
  selectIsAuthenticated,
  selectUser,
} from '../../store/globalSlices/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { openAuthModal } from '../AuthModal/AuthModalSlice';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import * as S from './Header.styles';
import { Icon } from '../Icon';
import { Search } from '../Search';
import { selectTheme } from '../../store/globalSlices/themeSlice';

export function Header() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const theme = useAppSelector(selectTheme);

  return (
    <S.Header>
      <Container>
        <S.Wrap>
          <Logo
            src={theme == 'dark' ? '/logoBlack.svg' : '/logoWhite.svg'}
          ></Logo>
          <S.Inner>
            <Nav></Nav>
            <Search></Search>
          </S.Inner>
          {isAuthenticated ? (
            <S.LinkItem aria-label="Go to your profile" to={'/profile'}>
              <S.LinkText>{user?.name}</S.LinkText>
              <Icon name="UserIcon"></Icon>
            </S.LinkItem>
          ) : (
            <S.BtnModal
              aria-label="Login"
              onClick={() => dispatch(openAuthModal())}
            >
              <S.BtnModalText>Login</S.BtnModalText>
              <Icon name="UserIcon"></Icon>
            </S.BtnModal>
          )}
        </S.Wrap>
      </Container>
    </S.Header>
  );
}
