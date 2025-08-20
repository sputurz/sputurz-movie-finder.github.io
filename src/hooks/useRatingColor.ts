import { useTheme } from 'styled-components';
import { IMovie } from '../models';

export function useRatingColor(rating: IMovie['tmdbRating']) {
  const theme = useTheme();
  if (rating >= 8) {
    return theme.bgRating1;
  } else if (rating >= 6) {
    return theme.bgRating2;
  } else if (rating >= 4) {
    return theme.bgRating3;
  }
  return theme.bgRating4;
}
