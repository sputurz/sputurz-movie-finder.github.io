import { IMovie } from '../../models';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';
import { MovieRating } from '../MovieRating';
import * as S from './SearchCard.styles';

interface IProps {
  movie: IMovie;
  onCardClick?: () => void;
}

export function SearchCard({ movie, onCardClick }: IProps) {
  return (
    <S.LinkItem to={`/movie/${movie.id}`} onClick={onCardClick}>
      <S.Img
        src={
          movie.backdropUrl ? movie.posterUrl : '/images/movieCard/error.jpg'
        }
        alt={movie.title}
      ></S.Img>
      <S.Wrap>
        <S.Inner>
          {movie.tmdbRating ? (
            <MovieRating rating={movie.tmdbRating} isSearch></MovieRating>
          ) : null}
          <span>{movie.releaseYear}</span>
          <span>{movie.genres?.join(', ') || ''}</span>
          <span>{convertMinsToHoursMins(movie.runtime)}</span>
        </S.Inner>
        <S.Title>{movie.title}</S.Title>
      </S.Wrap>
    </S.LinkItem>
  );
}
