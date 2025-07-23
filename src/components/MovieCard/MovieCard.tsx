import { useState } from 'react';
import {
  StyledMovieCard,
  StyledMovieCardImg,
  StyledMovieCardRating,
} from './MovieCard.styles';
import { IMovie } from '../../models';

interface IProps {
  // movie: IMovie;
  isRatingShown?: boolean;
}

export function MovieCard({ isRatingShown = true }: IProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <StyledMovieCard to={'/genres'}>
      {hasError ? (
        <StyledMovieCardImg src={`/images/movieCard/error.jpg`} alt={`genre`} />
      ) : (
        <StyledMovieCardImg
          src={`/images/genre/drama.jpg`}
          alt={`genre`}
          onError={() => setHasError(true)}
        />
      )}

      {isRatingShown ? <StyledMovieCardRating>10</StyledMovieCardRating> : null}
    </StyledMovieCard>
  );
}
