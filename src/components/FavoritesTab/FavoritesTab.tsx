import { useFavorites } from '../../hooks/useFavorites';
import { ErrorFallback } from '../ErrorFallback';
import { MovieCard } from '../MovieCard';
import * as S from './FavoritesTab.styles';

export default function FavoritesTab() {
  const { data, error } = useFavorites();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <S.Wrap>
      <S.List>
        {data.map((movie) => (
          <S.Item key={movie.id}>
            <MovieCard movie={movie} isUserProfile />
          </S.Item>
        ))}
      </S.List>
    </S.Wrap>
  );
}
