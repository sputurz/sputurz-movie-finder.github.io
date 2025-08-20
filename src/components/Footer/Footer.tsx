import { selectTheme, toggleTheme } from '../../store/globalSlices/themeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Social } from '../Socials';
import * as S from './Footer.styles';

export const Footer = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const onTheme = () => {
    dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <S.Wrap>
      <Container>
        <S.Inner>
          <S.ThemeBtn
            aria-label={
              theme === 'dark'
                ? 'Change theme to light'
                : 'Change theme to dark'
            }
            title={
              theme === 'dark'
                ? 'Change theme to light'
                : 'Change theme to dark'
            }
            onClick={onTheme}
          >
            <Icon name="DarkIcon"></Icon>
          </S.ThemeBtn>
          <Social></Social>
        </S.Inner>
      </Container>
    </S.Wrap>
  );
};
