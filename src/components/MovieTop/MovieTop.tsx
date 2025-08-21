import { useMovieTop } from '../../hooks/useMovieTop';
import { Container } from '../Container';
import { ErrorFallback } from '../ErrorFallback';
import { MovieCard } from '../MovieCard';
import * as S from './MovieTop.styles';

export function MovieTop() {
  const { data, error } = useMovieTop();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <section>
      <Container>
        <S.Wrap>
          <S.Title>Top 10 Movies</S.Title>
          <S.List>
            {data
              ? [...data]
                  .sort((a, b) => b.tmdbRating - a.tmdbRating)
                  .map((movie, index) => (
                    <S.Item key={movie.id}>
                      <MovieCard
                        movie={movie}
                        indexRating={index + 1}
                        isRatingShown
                      />
                    </S.Item>
                  ))
              : null}
          </S.List>
        </S.Wrap>
      </Container>
    </section>
  );
}
