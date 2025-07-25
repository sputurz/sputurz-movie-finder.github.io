import { FC } from 'react';
import { IMovie } from '../../models';
import {
  StyledMovieInfo,
  StyledMovieInfoBtnAbout,
  StyledMovieInfoBtnLike,
  StyledMovieInfoBtnUpd,
  StyledMovieInfoBtnWrap,
  StyledMovieInfoGenres,
  StyledMovieInfoImg,
  StyledMovieInfoPlot,
  StyledMovieInfoRuntime,
  StyledMovieInfoTagText,
  StyledMovieInfoTextWrap,
  StyledMovieInfoTitle,
  StyledMovieInfoWrap,
  StyledMovieInfoYear,
} from './MovieInfo.styles';
import { MovieRating } from '../MovieRating';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';
import { Icon } from '../Icon';

type Props = {
  movie: IMovie;
  isLoading?: boolean;
  onUpdate: () => void;
};

export const MovieInfo: FC<Props> = ({
  movie,
  isLoading = false,
  onUpdate,
}) => {
  return (
    <StyledMovieInfo>
      <StyledMovieInfoImg
        src={
          movie.backdropUrl ? movie.backdropUrl : '/images/movieInfo/error.jpg'
        }
        alt={movie.title}
      />

      <StyledMovieInfoWrap>
        <StyledMovieInfoTextWrap>
          <StyledMovieInfoTagText>
            <MovieRating rating={movie.tmdbRating}></MovieRating>
            <StyledMovieInfoYear>{movie.releaseYear}</StyledMovieInfoYear>
            <StyledMovieInfoGenres>
              {movie.genres?.join(', ') || ''}
            </StyledMovieInfoGenres>
            <StyledMovieInfoRuntime>
              {convertMinsToHoursMins(movie.runtime)}
            </StyledMovieInfoRuntime>
          </StyledMovieInfoTagText>
          <StyledMovieInfoTitle>{movie.title}</StyledMovieInfoTitle>
          <StyledMovieInfoPlot>{movie.plot}</StyledMovieInfoPlot>
        </StyledMovieInfoTextWrap>
        <StyledMovieInfoBtnWrap>
          <StyledMovieInfoBtnAbout>о фильме</StyledMovieInfoBtnAbout>
          <StyledMovieInfoBtnLike $isLiked={false}>
            <Icon name="LikeIcon"></Icon>
          </StyledMovieInfoBtnLike>
          <StyledMovieInfoBtnUpd onClick={onUpdate} disabled={isLoading}>
            <Icon name="UpdateIcon"></Icon>
          </StyledMovieInfoBtnUpd>
        </StyledMovieInfoBtnWrap>
      </StyledMovieInfoWrap>
    </StyledMovieInfo>
  );
};
