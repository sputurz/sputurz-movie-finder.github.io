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
          <Social></Social>
          <S.ThemeBtn
            aria-label={
              theme === 'dark'
                ? 'Сменить тему на светлую'
                : 'Сменить тему на темную'
            }
            title={
              theme === 'dark'
                ? 'Сменить тему на светлую'
                : 'Сменить тему на темную'
            }
            onClick={onTheme}
          >
            <Icon name="DarkIcon"></Icon>
          </S.ThemeBtn>
        </S.Inner>
      </Container>
    </S.Wrap>
  );
};
