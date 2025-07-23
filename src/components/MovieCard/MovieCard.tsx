import { useState } from 'react';
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
  const [hasError, setHasError] = useState(false);

  return (
    <StyledMovieCard to={`/movie/${movie.id}`}>
      {hasError ? (
        <StyledMovieCardImg src={`/images/movieCard/error.jpg`} alt={`genre`} />
      ) : (
        <StyledMovieCardImg
          src={movie.posterUrl}
          alt={`genre`}
          onError={() => setHasError(true)}
        />
      )}

      {isRatingShown ? (
        <StyledMovieCardRating>{indexRating}</StyledMovieCardRating>
      ) : null}
    </StyledMovieCard>
  );
}
