import { useMovieRandom } from '../../hooks/useMovieRandom';
import { Container } from '../Container';
import { ErrorFallback } from '../ErrorFallback';
import { MovieInfo } from '../MovieInfo';
import { StyledRandom } from './MovieRandom.styles';

export const MovieRandom = () => {
  const { data, error, isLoading, refetch } = useMovieRandom();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledRandom>
      <Container>
        <MovieInfo movie={data} onUpdate={refetch} isLoading={isLoading} />
      </Container>
    </StyledRandom>
  );
};
