import { IMovie } from '../models';

export function setRatingColor(rating: IMovie['tmdbRating']) {
  if (rating >= 8) {
    return 'var(--bg-rating-1)';
  } else if (rating < 8 && rating >= 6) {
    return 'var(--bg-rating-2)';
  } else if (rating < 6 && rating >= 4) {
    return 'var(--bg-rating-3)';
  } else {
    return 'var(--bg-rating-4)';
  }
}
