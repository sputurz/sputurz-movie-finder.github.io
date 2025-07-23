import { Container } from '../../components/Container/Container';
import {
  StyledByGenrePage,
  StyledByGenrePageList,
  StyledByGenrePageItem,
  StyledByGenrePageTitle,
  StyledByGenrePageWrap,
  StyledByGenrePageCard,
  StyledByGenrePageCardImg,
} from './MoviesPage.styles';

const genreList: string[] = [
  'history',
  'horror',
  'scifi',
  'stand-up',
  'fantasy',
  'drama',
  'mystery',
];

export default function MoviesPage() {
  return (
    <StyledByGenrePage>
      <Container>
        <StyledByGenrePageWrap>
          <StyledByGenrePageTitle>Жанры фильмов</StyledByGenrePageTitle>
          <StyledByGenrePageList>
            {genreList.map((genre) => (
              <StyledByGenrePageItem key={genre}>
                <StyledByGenrePageCard>
                  <StyledByGenrePageCardImg
                    src="/images/genre/drama.png"
                    alt=""
                  ></StyledByGenrePageCardImg>
                </StyledByGenrePageCard>
              </StyledByGenrePageItem>
            ))}
          </StyledByGenrePageList>
        </StyledByGenrePageWrap>
      </Container>
    </StyledByGenrePage>
  );
}
