import { IMovie } from '../../models';
import { useRatingColor } from '../../hooks/useRatingColor';
import { Icon } from '../Icon';
import * as S from './MovieRating.styles';

interface IProps {
  rating: IMovie['tmdbRating'];
  isSearch?: boolean;
}

export function MovieRating({ rating, isSearch }: IProps) {
  const color = useRatingColor(rating);

  if (typeof rating !== 'number' || isNaN(rating)) {
    return null;
  }

  return (
    <S.Wrap $color={color} $isSearch={isSearch}>
      <Icon name="StarIcon"></Icon>
      <S.Text $isSearch={isSearch}>
        {rating.toFixed(1).replace('.', ',')}
      </S.Text>
    </S.Wrap>
  );
}
