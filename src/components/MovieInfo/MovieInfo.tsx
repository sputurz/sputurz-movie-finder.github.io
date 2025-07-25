import { FC } from 'react';
import { IMovie } from '../../models';
import {
  StyledMovieInfo,
  StyledMovieInfoBtnUpd,
  StyledMovieInfoGenre,
  StyledMovieInfoGenres,
  StyledMovieInfoImg,
  StyledMovieInfoRuntime,
  StyledMovieInfoTagText,
  StyledMovieInfoTextWrap,
  StyledMovieInfoTitle,
  StyledMovieInfoWrap,
  StyledMovieInfoYear,
} from './MovieInfo.styles';
import { MovieRating } from '../MovieRating';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';

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
  const genresString = movie.genres?.join(', ') || '';

  return (
    <StyledMovieInfo>
      <StyledMovieInfoImg src={movie.backdropUrl} alt={movie.title} />
      <StyledMovieInfoWrap>
        <StyledMovieInfoTextWrap>
          <StyledMovieInfoTagText>
            <MovieRating rating={movie.tmdbRating}></MovieRating>
            <StyledMovieInfoYear>5555</StyledMovieInfoYear>
            <StyledMovieInfoGenres>{genresString}</StyledMovieInfoGenres>
            <StyledMovieInfoRuntime>
              {convertMinsToHoursMins(movie.runtime)}
            </StyledMovieInfoRuntime>
          </StyledMovieInfoTagText>
          <StyledMovieInfoTitle>{movie.title}</StyledMovieInfoTitle>
        </StyledMovieInfoTextWrap>
      </StyledMovieInfoWrap>
      {/* <StyledMovieInfoBtnUpd onClick={onUpdate} disabled={isLoading}>
          
        </StyledMovieInfoBtnUpd> */}
    </StyledMovieInfo>
  );
};
