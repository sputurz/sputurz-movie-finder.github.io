import { FC } from 'react';
import { IMovie } from '../../models';
import * as S from './MovieTagList.styles';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';

type IProps = {
  movie: IMovie;
};

export const MovieTagList: FC<IProps> = ({ movie }) => {
  return (
    <S.Wrap>
      <span>{movie.releaseYear}</span>
      <S.Genres>{movie.genres?.join(', ') || ''}</S.Genres>
      <span>{convertMinsToHoursMins(movie.runtime)}</span>
    </S.Wrap>
  );
};
