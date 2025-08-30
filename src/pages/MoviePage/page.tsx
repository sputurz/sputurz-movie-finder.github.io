import * as S from './MoviePage.styles';
import { useParams } from 'react-router-dom';
import { ErrorFallback } from '../../components/ErrorFallback';
import { MoviePromo } from '../../components/MoviePromo';
import { MovieInfo } from '../../components/MovieInfo';
import { useMovieById } from '../../hooks/useMovieById';
import { Container } from '../../components/Container';
import { isMovie } from '../../models';
import { Loader } from '../../components/Loader';

export default function MoviePage() {
  const { movieId } = useParams();
  const { data, error, isLoading, isFetching, refetch } = useMovieById(
    Number(movieId)
  );

  if (isLoading) return <Loader></Loader>;

  if (!isMovie(data)) {
    return (
      <section>
        <Container>
          <S.Error>{`Sorry, Invalid movie Id: "${movieId}"`}</S.Error>
        </Container>
      </section>
    );
  }

  if (error) return <ErrorFallback>Error: {error.message}</ErrorFallback>;

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
