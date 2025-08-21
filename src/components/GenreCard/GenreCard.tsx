import { useState } from 'react';
import * as S from './GenreCard.styles';
import { toUpperFirstChar } from '../../utils/toUpperFirstChar';

interface IProps {
  genre: string;
  genreTranslated: string;
}

export function GenreCard({ genre, genreTranslated }: IProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <S.LinkItem
      to={`/movies?genre=${genre}`}
      aria-label={`Link to genre: ${genre}`}
    >
      <S.ImgContainer>
        {hasError ? (
          <S.Img src={`/images/genre/error.jpg`} alt={genre} />
        ) : (
          <S.Img
            src={`/images/genre/${genre}.jpg`}
            alt={genre}
            onError={() => setHasError(true)}
          />
        )}
      </S.ImgContainer>
      <S.Text>{toUpperFirstChar(genreTranslated)}</S.Text>
    </S.LinkItem>
  );
}
