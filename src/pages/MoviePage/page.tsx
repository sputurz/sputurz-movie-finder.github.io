import { Container } from '../../components/Container/Container';
import { StyledMoviePage } from './MoviePage.styles';
import { useMovie } from '../../hooks/useMovie';
import { useParams } from 'react-router-dom';
import { ErrorFallback } from '../../components/ErrorFallback';
import { MoviePromo } from '../../components/MoviePromo';

export default function MoviePage() {
  const { movieId } = useParams();
  const { data, error, isLoading, refetch } = useMovie(Number(movieId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledMoviePage>
      <Container>
        <MoviePromo
          movie={data}
          onUpdate={refetch}
          isLoading={isLoading}
          isAboutMovie
        />
      </Container>
    </StyledMoviePage>
  );
}
