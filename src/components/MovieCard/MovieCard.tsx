import * as S from './MovieCard.styles';
import { IMovie } from '../../models';
import { useDeleteFavorite } from '../../hooks/useDeleteFavorite';
import { Icon } from '../Icon';

interface IProps {
  movie: IMovie;
  indexRating?: number;
  isRatingShown?: boolean;
  isUserProfile?: boolean;
}

export function MovieCard({
  movie,
  indexRating,
  isRatingShown = false,
  isUserProfile = false,
}: IProps) {
  const { deleteFavoriteHandler } = useDeleteFavorite(movie.id);

  return (
    <S.Card>
      <S.LinkItem
        to={`/movie/${movie.id}`}
        aria-label={`Link to info about movie: ${movie.title}`}
      >
        <S.Img
          src={
            movie.posterUrl ? movie.posterUrl : './images/movieCard/error.jpg'
          }
          alt={movie.title}
        />
        {!movie.posterUrl ? <S.ErrorText>{movie.title}</S.ErrorText> : null}
      </S.LinkItem>
      {isRatingShown ? <S.Rating>{indexRating}</S.Rating> : null}
      {isUserProfile ? (
        <S.BtnDelete onClick={deleteFavoriteHandler}>
          <Icon name="CloseIcon"></Icon>
        </S.BtnDelete>
      ) : null}
    </S.Card>
  );
}
