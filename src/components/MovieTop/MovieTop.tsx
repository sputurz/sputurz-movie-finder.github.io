import { useMovieTop } from '../../hooks/useMovieTop';
import { MovieCard } from '../MovieCard';
import {
  StyledTop,
  StyledTopList,
  StyledTopListItem,
  StyledTopTitle,
} from './MovieTop.styles';

export function MovieTop() {
  const { data, error, isLoading } = useMovieTop();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <StyledTop>
      <StyledTopTitle>Топ 10 фильмов</StyledTopTitle>
      <StyledTopList>
        {data
          ? [...data]
              .sort((a, b) => b.tmdbRating - a.tmdbRating)
              .map((movie, index) => (
                <StyledTopListItem key={movie.id}>
                  <MovieCard
                    movie={movie}
                    indexRating={index + 1}
                    isRatingShown
                  />
                </StyledTopListItem>
              ))
          : null}
      </StyledTopList>
    </StyledTop>
  );
}
