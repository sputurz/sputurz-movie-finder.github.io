import { Container } from '../../components/Container/Container';
import { GenreCard } from '../GenreCard';
import {
  StyledGenrePage,
  StyledGenrePageList,
  StyledGenrePageListItem,
  StyledGenrePageTitle,
  StyledGenrePageWrap,
} from './GenrePage.styles';

const genreList: string[] = [
  'history',
  'horror',
  'scifi',
  'stand-up',
  'fantasy',
  // 'drama',
  // 'mystery',
  // 'family',
  // 'comedy',
  // 'romance',
  // 'music',
  // 'crime',
  // 'tv-movie',
  // 'documentary',
  // 'action',
  // 'thriller',
  // 'western',
  // 'animation',
  // 'war',
  // 'adventure',
];

export function GenrePage() {
  return (
    <StyledGenrePage>
      <Container>
        <StyledGenrePageWrap>
          <StyledGenrePageTitle>Жанры фильмов</StyledGenrePageTitle>
          <StyledGenrePageList>
            {genreList.map((genre) => (
              <StyledGenrePageListItem key={genre}>
                <GenreCard genre={genre}></GenreCard>
              </StyledGenrePageListItem>
            ))}
          </StyledGenrePageList>
        </StyledGenrePageWrap>
      </Container>
    </StyledGenrePage>
  );
}
