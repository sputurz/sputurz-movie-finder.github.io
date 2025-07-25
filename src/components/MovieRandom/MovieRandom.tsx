import { useMovieRandom } from '../../hooks/useMovieRandom';
import { Container } from '../Container';
import { ErrorFallback } from '../ErrorFallback';
import { MoviePromo } from '../MoviePromo';
import { StyledRandom } from './MovieRandom.styles';

export const MovieRandom = () => {
  const { data, error, isLoading, refetch } = useMovieRandom();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledRandom>
      <Container>
        <MoviePromo movie={data} onUpdate={refetch} isLoading={isLoading} />
      </Container>
    </StyledRandom>
  );
};
