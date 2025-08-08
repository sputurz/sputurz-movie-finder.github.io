import { useSearchParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { useMovies } from '../../hooks/useMovies';
import * as S from './MoviesPage.styles';
import { genres, getTransletedValue } from '../../utils/dictionary';
import { toUpperFirstChar } from '../../utils/toUpperFirstChar';
import { ErrorFallback } from '../../components/ErrorFallback';
import { Icon } from '../../components/Icon';
import { InfiniteTrigger } from '../../components/InfiniteTrigger';
import { MovieCard } from '../../components/MovieCard';
import { selectLanguage } from '../../store/globalSlices/languageSlice';
import { useAppSelector } from '../../store/hooks';

export default function MoviesPage() {
  const currentLang = useAppSelector(selectLanguage);
  const [searchParams] = useSearchParams();

  const searchCount = searchParams.get('count')
    ? Number(searchParams.get('count'))
    : 10;

  const searchTitle = searchParams.get('title') || '';
  const searchGenre = searchParams.get('genre') || '';

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovies({
      count: searchCount,
      title: searchTitle,
      genre: searchGenre,
    });

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <S.Wrap>
      <Container>
        <S.Title>Поиск фильмов по заданными фильтрам</S.Title>
        <S.Inner>
          {searchGenre ? (
            <S.LinkItem to={'/genres'}>
              <Icon name="LeftIcon"></Icon>
              {toUpperFirstChar(
                getTransletedValue(genres, currentLang, searchGenre) ||
                  searchGenre
              )}
            </S.LinkItem>
          ) : null}
          <S.List>
            {data.pages.flat().map((movie) => (
              <S.ListItem key={movie.id}>
                <MovieCard movie={movie}></MovieCard>
              </S.ListItem>
            ))}
          </S.List>
          {hasNextPage ? (
            <S.Btn
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              Показать ещё
            </S.Btn>
          ) : null}
          {hasNextPage && (
            <InfiniteTrigger
              disabled={isFetchingNextPage}
              onIntersect={() => fetchNextPage()}
            />
          )}
        </S.Inner>
      </Container>
    </S.Wrap>
  );
}
