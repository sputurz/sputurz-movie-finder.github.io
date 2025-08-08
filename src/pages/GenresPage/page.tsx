import { Container } from '../../components/Container/Container';
import { GenreCard } from '../../components/GenreCard';
import * as S from './GenresPage.styles';
import { genres, getTransletedValue } from '../../utils/dictionarty';
import { ErrorFallback } from '../../components/ErrorFallback';
import { useMovieGenres } from '../../hooks/useMovieGenres';
import { useAppSelector } from '../../store/hooks';
import { selectLanguage } from '../../store/globalSlices/languageSlice';

export default function GenresPage() {
  const currentLang = useAppSelector(selectLanguage);

  const { data, error } = useMovieGenres();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <S.Wrap>
      <Container>
        <S.Inner>
          <S.Title>Жанры фильмов</S.Title>
          <S.List>
            {data.map(
              (genre) =>
                genre && (
                  <li key={genre}>
                    <GenreCard
                      genre={genre}
                      genreTranslated={
                        getTransletedValue(genres, currentLang, genre) || genre
                      }
                    />
                  </li>
                )
            )}
          </S.List>
        </S.Inner>
      </Container>
    </S.Wrap>
  );
}
