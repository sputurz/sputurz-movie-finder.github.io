import { Container } from '../../components/Container/Container';
import { GenreCard } from '../../components/GenreCard';
import {
  StyledGenresPage,
  StyledGenresPageList,
  StyledGenresPageListItem,
  StyledGenresPageTitle,
  StyledGenresPageWrap,
} from './GenresPage.styles';
import Api from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import { genres } from '../../utils/dictionarty';

const currentLang = 'russian';

export default function GenresPage() {
  const movieGenresQuery = useQuery({
    queryFn: () => Api.getMovieGenres(),
    queryKey: ['genres'],
  });

  switch (movieGenresQuery.status) {
    case 'pending':
      return <div>Loader zagluska =0</div>;
    case 'success':
      return (
        <StyledGenresPage>
          <Container>
            <StyledGenresPageWrap>
              <StyledGenresPageTitle>Жанры фильмов</StyledGenresPageTitle>
              <StyledGenresPageList>
                {movieGenresQuery.data.map(
                  (genre) =>
                    genre && (
                      <StyledGenresPageListItem key={genre}>
                        <GenreCard
                          genre={genre}
                          genreTranslated={
                            genres[currentLang][
                              genre as keyof typeof genres.russian
                            ] || genre
                          }
                        />
                      </StyledGenresPageListItem>
                    )
                )}
              </StyledGenresPageList>
            </StyledGenresPageWrap>
          </Container>
        </StyledGenresPage>
      );
    case 'error':
      return (
        <div>
          <span style={{ color: 'red' }}>Произошла ошибка</span>
          <button onClick={() => movieGenresQuery.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
  }
}
