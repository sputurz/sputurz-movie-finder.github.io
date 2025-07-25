import { FC } from 'react';
import { IMovie } from '../../models';
import {
  StyledMoviePromo,
  StyledMoviePromoBtnAbout,
  StyledMoviePromoBtnLike,
  StyledMoviePromoBtnUpd,
  StyledMoviePromoBtnVideo,
  StyledMoviePromoBtnWrap,
  StyledMoviePromoGenres,
  StyledMoviePromoImg,
  StyledMoviePromoPlot,
  StyledMoviePromoRuntime,
  StyledMoviePromoTagText,
  StyledMoviePromoTextWrap,
  StyledMoviePromoTitle,
  StyledMoviePromoWrap,
  StyledMoviePromoYear,
} from './MoviePromo.styles';
import { MovieRating } from '../MovieRating';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';
import { Icon } from '../Icon';

type Props = {
  movie: IMovie;
  isLoading?: boolean;
  isAboutMovie?: boolean;
  onUpdate?: () => void;
};

export const MoviePromo: FC<Props> = ({
  movie,
  isLoading = false,
  isAboutMovie = false,
  onUpdate,
}) => {
  return (
    <StyledMoviePromo>
      <StyledMoviePromoImg
        src={
          movie.backdropUrl ? movie.backdropUrl : '/images/MoviePromo/error.jpg'
        }
        alt={movie.title}
      />

      <StyledMoviePromoWrap>
        <StyledMoviePromoTextWrap>
          <StyledMoviePromoTagText>
            <MovieRating rating={movie.tmdbRating}></MovieRating>
            <StyledMoviePromoYear>{movie.releaseYear}</StyledMoviePromoYear>
            <StyledMoviePromoGenres>
              {movie.genres?.join(', ') || ''}
            </StyledMoviePromoGenres>
            <StyledMoviePromoRuntime>
              {convertMinsToHoursMins(movie.runtime)}
            </StyledMoviePromoRuntime>
          </StyledMoviePromoTagText>
          <StyledMoviePromoTitle>{movie.title}</StyledMoviePromoTitle>
          <StyledMoviePromoPlot>{movie.plot}</StyledMoviePromoPlot>
        </StyledMoviePromoTextWrap>
        <StyledMoviePromoBtnWrap $isAboutMovie={isAboutMovie}>
          <StyledMoviePromoBtnVideo>Трейлер</StyledMoviePromoBtnVideo>
          {isAboutMovie ? null : (
            <StyledMoviePromoBtnAbout to={`/movie/${movie.id}`}>
              о фильме
            </StyledMoviePromoBtnAbout>
          )}
          <StyledMoviePromoBtnLike $isLiked={false}>
            <Icon name="LikeIcon"></Icon>
          </StyledMoviePromoBtnLike>
          {isAboutMovie ? null : (
            <StyledMoviePromoBtnUpd onClick={onUpdate} disabled={isLoading}>
              <Icon name="UpdateIcon"></Icon>
            </StyledMoviePromoBtnUpd>
          )}
        </StyledMoviePromoBtnWrap>
      </StyledMoviePromoWrap>
    </StyledMoviePromo>
  );
};
