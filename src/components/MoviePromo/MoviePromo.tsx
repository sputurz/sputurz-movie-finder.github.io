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
import { VideoPlayer } from '../VideoPlayer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectIsAuthenticated } from '../../store/globalSlices/authSlice';
import { openAuthModal } from '../AuthModal/AuthModalSlice';
import { useDeleteFavorite } from '../../hooks/useDeleteFavorite';
import { useAddFavorite } from '../../hooks/useAddFavorite';

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
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const { deleteFavoriteHandler, isPending } = useDeleteFavorite(movie.id);
  const { addFavoriteHandler } = useAddFavorite(movie.id);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const isBusy = isFetching || isLoading || !imageLoaded;

  const onLike = () => {
    if (isAuthenticated) {
      addFavoriteHandler();
    } else {
      dispatch(openAuthModal());
    }
  };

  return (
    <StyledMoviePromo>
      <Container>
        <button onClick={deleteFavoriteHandler} disabled={isPending}>
          delete
        </button>
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
                {movie.tmdbRating ? (
                  <MovieRating rating={movie.tmdbRating}></MovieRating>
                ) : null}

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
              <StyledMoviePromoBtnVideo
                disabled={isBusy}
                onClick={() => setShowPlayer(true)}
              >
                Трейлер
              </StyledMoviePromoBtnVideo>
              {showPlayer && (
                <VideoPlayer
                  trailerYouTubeId={movie.trailerYoutubeId}
                  trailerUrl={movie.trailerUrl}
                />
              )}
              {isAboutMovie ? null : (
                <StyledMoviePromoLinkAbout
                  $iSdisabled={isBusy}
                  to={`/movie/${movie.id}`}
                >
                  о фильме
                </StyledMoviePromoLinkAbout>
              )}
              <StyledMoviePromoBtnLike
                $isLiked={false}
                disabled={isBusy}
                onClick={onLike}
              >
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
