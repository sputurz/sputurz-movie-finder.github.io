import { FC } from 'react';
import { IMovie } from '../../models';
import {
  StyledMovieInfo,
  StyledMovieInfoDash,
  StyledMovieInfoItem,
  StyledMovieInfoLabel,
  StyledMovieInfoList,
  StyledMovieInfoTitle,
  StyledMovieInfoValue,
} from './MovieInfo.styles';
import { formatStringToRub } from '../../utils/formatStringToRub';

type Props = {
  movie: IMovie;
};

export const MovieInfo: FC<Props> = ({ movie }) => {
  const infoList = [
    { label: 'Язык оригинала', value: movie.language },
    { label: 'Бюджет', value: formatStringToRub(movie.budget) },
    { label: 'Выручка', value: formatStringToRub(movie.revenue) },
    { label: 'Режиссёр', value: movie.director },
    { label: 'Продакшен', value: movie.production },
    { label: 'Награды', value: movie.awardsSummary },
  ] as const;

  return (
    <StyledMovieInfo>
      <StyledMovieInfoTitle>О фильме</StyledMovieInfoTitle>
      <StyledMovieInfoList>
        {infoList.map((item) =>
          item.value ? (
            <StyledMovieInfoItem key={item.value}>
              <StyledMovieInfoLabel>{item.label}</StyledMovieInfoLabel>
              <StyledMovieInfoDash></StyledMovieInfoDash>
              <StyledMovieInfoValue>{item.value}</StyledMovieInfoValue>
            </StyledMovieInfoItem>
          ) : null
        )}
      </StyledMovieInfoList>
    </StyledMovieInfo>
  );
};
