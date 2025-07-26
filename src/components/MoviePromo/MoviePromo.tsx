import { FC } from 'react';
import { IMovie } from '../../models';
import {
  StyledMoviePromo,
  StyledMoviePromoLinkAbout,
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
  isFetching: boolean;
  isAboutMovie?: boolean;
  onUpdate?: () => void;
};

export const MoviePromo: FC<Props> = ({
  movie,
  isFetching,
  isAboutMovie = false,
  onUpdate,
}) => {
  return (
    <StyledMoviePromo>
      <StyledMoviePromoImg
        src={
          movie.backdropUrl ? movie.backdropUrl : '/images/moviePromo/error.jpg'
        }
        alt={movie.title}
      />
      <StyledMoviePromoWrap $isAboutMovie={isAboutMovie}>
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
          <StyledMoviePromoTitle $isAboutMovie={isAboutMovie}>
            {movie.title}
          </StyledMoviePromoTitle>
          <StyledMoviePromoPlot $isAboutMovie={isAboutMovie}>
            {movie.plot}
          </StyledMoviePromoPlot>
        </StyledMoviePromoTextWrap>
        <StyledMoviePromoBtnWrap $isAboutMovie={isAboutMovie}>
          <StyledMoviePromoBtnVideo disabled={isFetching}>
            Трейлер
          </StyledMoviePromoBtnVideo>
          {isAboutMovie ? null : (
            <StyledMoviePromoLinkAbout
              $iSdisabled={isFetching}
              to={`/movie/${movie.id}`}
            >
              о фильме
            </StyledMoviePromoLinkAbout>
          )}
          <StyledMoviePromoBtnLike $isLiked={false} disabled={isFetching}>
            <Icon name="LikeIcon"></Icon>
          </StyledMoviePromoBtnLike>
          {isAboutMovie ? null : (
            <StyledMoviePromoBtnUpd onClick={onUpdate} disabled={isFetching}>
              <Icon name="UpdateIcon"></Icon>
            </StyledMoviePromoBtnUpd>
          )}
        </StyledMoviePromoBtnWrap>
      </StyledMoviePromoWrap>
    </StyledMoviePromo>
  );
};
