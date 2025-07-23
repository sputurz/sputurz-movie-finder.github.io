import { Container } from '../../components/Container/Container';
import { MovieTop } from '../../components/MovieTop/MovieTop';
import { StyledHomePageTitle } from './HomePage.styles';

export default function HomePage() {
  return (
    <Container>
      <StyledHomePageTitle>Главная страница - Маруся</StyledHomePageTitle>
      <MovieTop></MovieTop>
    </Container>
  );
}
