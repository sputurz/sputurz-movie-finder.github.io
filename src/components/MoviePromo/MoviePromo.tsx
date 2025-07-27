import { FC, useState } from 'react';
import { IMovie } from '../../models';
import {
  StyledMoviePromo,
  StyledMoviePromoLinkAbout,
  StyledMoviePromoBtnLike,
  StyledMoviePromoBtnUpd,
  StyledMoviePromoBtnVideo,
  StyledMoviePromoBtnWrap,
  StyledMoviePromoGenres,
  StyledMoviePromoPlot,
  StyledMoviePromoRuntime,
  StyledMoviePromoTagText,
  StyledMoviePromoTextWrap,
  StyledMoviePromoTitle,
  StyledMoviePromoWrap,
  StyledMoviePromoYear,
  StyledMoviePromoImgContainer,
  StyledMoviePromoInner,
} from './MoviePromo.styles';
import { MovieRating } from '../MovieRating';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';
import { Icon } from '../Icon';
import { Container } from '../Container';

type Props = {
  movie: IMovie;
  isFetching: boolean;
  isLoading: boolean;
  isAboutMovie?: boolean;
  onUpdate?: () => void;
};

export const MoviePromo: FC<Props> = ({
  movie,
  isFetching,
  isLoading,
  isAboutMovie = false,
  onUpdate,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const isBusy = isFetching || isLoading || !imageLoaded;

  return (
    <StyledMoviePromo>
      <Container>
        <StyledMoviePromoInner>
          <StyledMoviePromoImgContainer
            src={movie.backdropUrl || '/images/moviePromo/error.jpg'}
            alt={movie.title}
            isFetching={isFetching}
            isLoading={isLoading}
            onImageLoadedChange={setImageLoaded}
          ></StyledMoviePromoImgContainer>

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
              <StyledMoviePromoBtnVideo disabled={isBusy}>
                Трейлер
              </StyledMoviePromoBtnVideo>
              {isAboutMovie ? null : (
                <StyledMoviePromoLinkAbout
                  $iSdisabled={isBusy}
                  to={`/movie/${movie.id}`}
                >
                  о фильме
                </StyledMoviePromoLinkAbout>
              )}
              <StyledMoviePromoBtnLike $isLiked={false} disabled={isBusy}>
                <Icon name="LikeIcon"></Icon>
              </StyledMoviePromoBtnLike>
              {isAboutMovie ? null : (
                <StyledMoviePromoBtnUpd onClick={onUpdate} disabled={isBusy}>
                  <Icon name="UpdateIcon"></Icon>
                </StyledMoviePromoBtnUpd>
              )}
            </StyledMoviePromoBtnWrap>
          </StyledMoviePromoWrap>
        </StyledMoviePromoInner>
      </Container>
    </StyledMoviePromo>
  );
};
