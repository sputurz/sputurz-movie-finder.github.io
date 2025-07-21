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
                        <GenreCard genre={genre}></GenreCard>
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
