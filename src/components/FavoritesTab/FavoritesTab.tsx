import { useFavorites } from '../../hooks/useFavorites';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
import { MovieCard } from '../MovieCard';
import * as S from './FavoritesTab.styles';

export default function FavoritesTab() {
  const { data, error, isLoading } = useFavorites();

  if (!data) return null;
  if (isLoading) return <Loader></Loader>;
  if (error) return <ErrorFallback>Error: {error.message}</ErrorFallback>;

  return (
    <S.Wrap>
      {data.length ? (
        <S.List>
          {data.map((movie) => (
            <S.Item key={movie.id}>
              <MovieCard movie={movie} isUserProfile />
            </S.Item>
          ))}
        </S.List>
      ) : (
        <S.Text>The list of films is empty for now</S.Text>
      )}
    </S.Wrap>
  );
}
