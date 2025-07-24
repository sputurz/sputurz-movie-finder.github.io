import { Container } from '../../components/Container/Container';
import { StyledMoviePage } from './MoviePage.styles';
import { useMovie } from '../../hooks/useMovie';
import { useParams } from 'react-router-dom';

export default function MoviePage() {
  const { movieId } = useParams();
  const { data } = useMovie(Number(movieId));

  if (!data) {
    return <p>пользователя таким userId нет</p>;
  }

  return (
    <StyledMoviePage>
      <Container>
        <span>{data.title}</span>
      </Container>
    </StyledMoviePage>
  );
}
