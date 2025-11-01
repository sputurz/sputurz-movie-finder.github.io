import { useTheme } from 'styled-components';
import { IMovie } from '../models';

/**
 * Хук получения цвета фона рейтинга
 * @param {IMovie['tmdbRating']} rating - рейтинг фильма
 *
 * @example
 * const color = useRatingColor(rating);
 *
 * @description
 * Хук получения цвета фона рейтинга в зависимости от выбранной темы приложения
 * и значения рейтинга. Возвращаемое значение передаем в пармаетры стилей
 * styled-components
 */

export function useRatingColor(rating: IMovie['tmdbRating']) {
  const theme = useTheme();

  if (!rating) {
    return theme.bgRating4;
  }

  if (rating >= 8) {
    return theme.bgRating1;
  } else if (rating >= 6) {
    return theme.bgRating2;
  } else if (rating >= 4) {
    return theme.bgRating3;
  }
  return theme.bgRating4;
}
