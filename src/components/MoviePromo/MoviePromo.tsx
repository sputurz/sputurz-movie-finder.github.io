import { FC, useState } from 'react';
import { IMovie } from '../../models';
import * as S from './MoviePromo.styles';
import { MovieRating } from '../MovieRating';
import { Icon } from '../Icon';
import { Container } from '../Container';
import { VideoPlayer } from '../VideoPlayer';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/globalSlices/authSlice';
import { useLike } from '../../hooks/useLike';
import { MovieTagList } from '../MovieTagList';
import { Button } from '../Button';

type IProps = {
  movie: IMovie;
  isFetching: boolean;
  isLoading: boolean;
  isAboutMovie?: boolean;
  refetch?: () => void;
};

export const MoviePromo: FC<IProps> = ({
  movie,
  isFetching,
  isLoading,
  isAboutMovie = false,
  refetch,
}) => {
  const user = useAppSelector(selectUser);
  const isLiked = user?.favorites.includes(movie.id.toString()) || false;

  const { onLike } = useLike(movie.id);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const isBusy = isFetching || isLoading || !imageLoaded;

  const onUpdate = () => {
    if (refetch) {
      refetch();
    }
  };

  const onVideoBtn = () => {
    setShowPlayer(true);
    document.body.style.overflow = 'hidden';
  };

  const onBackdrop = () => {
    setShowPlayer(false);
    document.body.style.overflow = '';
  };

  const onClose = () => {
    setShowPlayer(false);
    document.body.style.overflow = '';
  };

  return (
    <section>
      <Container>
        <S.Inner>
          <S.ImgWrap
            src={movie.backdropUrl || '/images/moviePromo/error.jpg'}
            alt={movie.title}
            isFetching={isFetching}
            isLoading={isLoading}
            onImageLoadedChange={setImageLoaded}
          ></S.ImgWrap>

          <S.Wrap $isAboutMovie={isAboutMovie}>
            <S.TextWrap>
              <S.Tag>
                {movie.tmdbRating ? (
                  <MovieRating rating={movie.tmdbRating}></MovieRating>
                ) : null}

                <MovieTagList movie={movie}></MovieTagList>
              </S.Tag>
              <S.Title $isAboutMovie={isAboutMovie}>{movie.title}</S.Title>
              <S.Plot $isAboutMovie={isAboutMovie}>{movie.plot}</S.Plot>
            </S.TextWrap>
            <S.BtnWrap $isAboutMovie={isAboutMovie}>
              <Button
                aria-label="Show movie trailer"
                isDisabled={isBusy}
                onClick={onVideoBtn}
              >
                Trailer
              </Button>
              {showPlayer && (
                <VideoPlayer
                  trailerYouTubeId={movie.trailerYoutubeId}
                  trailerUrl={movie.trailerUrl}
                  onBackdrop={onBackdrop}
                  onClose={onClose}
                />
              )}
              {isAboutMovie ? null : (
                <S.LinkItem
                  aria-label="About the movie"
                  $iSdisabled={isBusy}
                  to={`/movie/${movie.id}`}
                >
                  About
                </S.LinkItem>
              )}
              <S.BtnLike
                aria-label="Add movie to favorites"
                $isLiked={isLiked}
                disabled={isBusy}
                onClick={onLike}
              >
                <Icon name="LikeIcon"></Icon>
              </S.BtnLike>
              {isAboutMovie ? null : (
                <Button
                  aria-label="Show new random movie"
                  onClick={onUpdate}
                  isDisabled={isBusy}
                  kind="secondary"
                >
                  <Icon name="UpdateIcon"></Icon>
                </Button>
              )}
            </S.BtnWrap>
          </S.Wrap>
        </S.Inner>
      </Container>
    </section>
  );
};
