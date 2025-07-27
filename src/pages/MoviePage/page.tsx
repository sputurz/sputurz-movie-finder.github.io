import { StyledMoviePageTitle } from './MoviePage.styles';
import { useMovie } from '../../hooks/useMovie';
import { useParams } from 'react-router-dom';
import { ErrorFallback } from '../../components/ErrorFallback';
import { MoviePromo } from '../../components/MoviePromo';
import { MovieInfo } from '../../components/MovieInfo';

export default function MoviePage() {
  const { movieId } = useParams();
  const { data, error, isLoading, isFetching, refetch } = useMovie(
    Number(movieId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <>
      <StyledMoviePageTitle>
        {` Cтраница - о фильме ${data.title}`}
      </StyledMoviePageTitle>

      <MoviePromo
        isFetching={isFetching}
        movie={data}
        onUpdate={refetch}
        isLoading={isLoading}
        isAboutMovie
      />

      <MovieInfo movie={data} />
    </>
  );
}
