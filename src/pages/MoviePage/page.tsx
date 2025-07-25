import { Container } from '../../components/Container/Container';
import { StyledMoviePage } from './MoviePage.styles';
import { useMovie } from '../../hooks/useMovie';
import { useParams } from 'react-router-dom';
import { MovieRating } from '../../components/MovieRating';

export default function MoviePage() {
  const { movieId } = useParams();
  const { data } = useMovie(Number(movieId));

  return (
    <StyledMoviePage>
      <Container>
        <span>{data?.title}</span>
        <div>{data?.tmdbRating}</div>
        <MovieRating rating={data?.tmdbRating}></MovieRating>
      </Container>
    </StyledMoviePage>
  );
}
