import { FC } from 'react';
import { IMovie } from '../../models';
import * as S from './MovieInfo.styles';
import { formatStringToRub } from '../../utils/formatStringToRub';
import { Container } from '../Container';

type IProps = {
  movie: IMovie;
};

export const MovieInfo: FC<IProps> = ({ movie }) => {
  const infoList = [
    { label: 'Original language', value: movie.language },
    { label: 'Budget', value: formatStringToRub(movie.budget) },
    { label: 'Revenue', value: formatStringToRub(movie.revenue) },
    { label: 'Director', value: movie.director },
    { label: 'Production', value: movie.production },
    { label: 'Awards', value: movie.awardsSummary },
  ] as const;

  return (
    <section>
      <Container>
        <S.Wrap>
          <S.Title>О фильме</S.Title>
          <S.List>
            {infoList.map((item) =>
              item.value ? (
                <S.Item key={item.value}>
                  <S.Label>{item.label}</S.Label>
                  <S.Border></S.Border>
                  <S.Value>{item.value}</S.Value>
                </S.Item>
              ) : null
            )}
          </S.List>
        </S.Wrap>
      </Container>
    </section>
  );
};
