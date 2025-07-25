import { IMovie } from '../../models';
import { setRatingColor } from '../../utils/setRatingColor';
import { Icon } from '../Icon';
import { StyledMovieRating, StyledMovieRatingText } from './MovieRating.styles';

interface IProps {
  rating: IMovie['tmdbRating'] | undefined | null;
}

export function MovieRating({ rating }: IProps) {
  if (typeof rating !== 'number' || isNaN(rating)) {
    return null;
  }

  return (
    <StyledMovieRating color={setRatingColor(rating)}>
      <Icon name="StarIcon"></Icon>
      <StyledMovieRatingText>
        {rating.toFixed(1).replace('.', ',')}
      </StyledMovieRatingText>
    </StyledMovieRating>
  );
}
