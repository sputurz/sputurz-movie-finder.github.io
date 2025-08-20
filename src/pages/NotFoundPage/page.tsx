import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { selectTheme } from '../../store/globalSlices/themeSlice';
import { useAppSelector } from '../../store/hooks';
import * as S from './NotFoundPage.styles';

export default function NotFoundPage() {
  const theme = useAppSelector(selectTheme);

  return (
    <section>
      <Container>
        <S.Wrap>
          <S.Title>
            Error 404<br></br>Sorry, Page Not Found!
          </S.Title>
          <Logo
            src={theme == 'dark' ? '/logoBlack.svg' : '/logoWhite.svg'}
          ></Logo>
        </S.Wrap>
      </Container>
    </section>
  );
}
