import { Container } from '../../components/Container/Container';
import { MovieRandom } from '../../components/MovieRandom';
import { MovieTop } from '../../components/MovieTop/MovieTop';
import { StyledHomePageTitle } from './HomePage.styles';

export default function HomePage() {
  return (
    <Container>
      <StyledHomePageTitle>Главная страница - Маруся</StyledHomePageTitle>
      <MovieRandom></MovieRandom>
      <MovieTop></MovieTop>
    </Container>
  );
}
