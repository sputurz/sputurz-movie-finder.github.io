import * as S from './MoviePage.styles';
import { useParams } from 'react-router-dom';
import { ErrorFallback } from '../../components/ErrorFallback';
import { MoviePromo } from '../../components/MoviePromo';
import { MovieInfo } from '../../components/MovieInfo';
import { useMovieById } from '../../hooks/useMovieById';

export default function MoviePage() {
  const { movieId } = useParams();
  const { data, error, isLoading, isFetching, refetch } = useMovieById(
    Number(movieId)
  );

  if (error) return <ErrorFallback>Error: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <>
      <S.Title>{` Page - about movie: ${data.title}`}</S.Title>

      <MoviePromo
        isFetching={isFetching}
        movie={data}
        refetch={refetch}
        isLoading={isLoading}
        isAboutMovie
      />

      <MovieInfo movie={data} />
    </>
  );
}
