import { Container } from '../../components/Container/Container';
import Api from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import {
  StyledHomePageTitle,
  StyledTop,
  StyledTopList,
  StyledTopListItem,
  StyledTopTitle,
} from './HomePage.styles';
import { MovieCard } from '../../components/MovieCard/MovieCard';

export default function HomePage() {
  // const movieTop10Query = useQuery({
  //   queryFn: () => Api.getMovieTop10(),
  //   queryKey: ['top10'],
  // });

  // const movieRandomQuery = useQuery({
  //   queryFn: () => Api.getMovieRandom(),
  //   queryKey: ['top10'],
  // });
  return (
    <Container>
      <StyledHomePageTitle>Главная страница - Маруся</StyledHomePageTitle>
      <StyledTop>
        <StyledTopTitle>Топ 10 фильмов</StyledTopTitle>

        <StyledTopList>
          <StyledTopListItem>
            <MovieCard />
          </StyledTopListItem>
          <StyledTopListItem>
            <MovieCard />
          </StyledTopListItem>
          <StyledTopListItem>
            <MovieCard />
          </StyledTopListItem>
          <StyledTopListItem>
            <MovieCard />
          </StyledTopListItem>
          <StyledTopListItem>
            <MovieCard />
          </StyledTopListItem>
          <StyledTopListItem>
            <MovieCard />
          </StyledTopListItem>
        </StyledTopList>
      </StyledTop>
    </Container>
  );
}
