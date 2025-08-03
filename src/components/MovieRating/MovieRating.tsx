import { IMovie } from '../../models';
import { setRatingColor } from '../../utils/setRatingColor';
import { Icon } from '../Icon';
import * as S from './MovieRating.styles';

interface IProps {
  rating: IMovie['tmdbRating'] | undefined | null;
  isSearch?: boolean;
}

export function MovieRating({ rating, isSearch }: IProps) {
  if (typeof rating !== 'number' || isNaN(rating)) {
    return null;
  }

  return (
    <S.Wrap $color={setRatingColor(rating)} $isSearch={isSearch}>
      <Icon name="StarIcon"></Icon>
      <S.Text $isSearch={isSearch}>
        {rating.toFixed(1).replace('.', ',')}
      </S.Text>
    </S.Wrap>
  );
}
