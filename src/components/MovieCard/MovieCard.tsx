import {
  StyledMovieCard,
  StyledMovieCardImg,
  StyledMovieCardRating,
} from './MovieCard.styles';
import { IMovie } from '../../models';

interface IProps {
  movie: IMovie;
  indexRating?: number;
  isRatingShown?: boolean;
}

export function MovieCard({
  movie,
  indexRating,
  isRatingShown = false,
}: IProps) {
  return (
    <StyledMovieCard to={`/movie/${movie.id}`}>
      <StyledMovieCardImg
        src={
          movie.backdropUrl ? movie.posterUrl : '/images/movieCard/error.jpg'
        }
        alt={movie.title}
      />

      {isRatingShown ? (
        <StyledMovieCardRating>{indexRating}</StyledMovieCardRating>
      ) : null}
    </StyledMovieCard>
  );
}
