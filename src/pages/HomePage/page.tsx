import { ErrorFallback } from '../../components/ErrorFallback';
import { MoviePromo } from '../../components/MoviePromo';
import { MovieTop } from '../../components/MovieTop/MovieTop';
import { useMovieRandom } from '../../hooks/useMovieRandom';
import * as S from './HomePage.styles';

export default function HomePage() {
  const { data, error, isLoading, isFetching, refetch } = useMovieRandom();

  if (error) return <ErrorFallback>Error: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <>
      <S.Title>Main page</S.Title>
      <MoviePromo
        isLoading={isLoading}
        movie={data}
        refetch={refetch}
        isFetching={isFetching}
      />
      <MovieTop></MovieTop>
    </>
  );
}
