import { useState } from 'react';
import {
  StyledCard,
  StyledCardImg,
  StyledCardImgContainer,
  StyledCardName,
} from './GenreCard.styles';

interface IProps {
  genre: string;
  genreTranslated: string;
}

export function GenreCard({ genre, genreTranslated }: IProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <StyledCard href="#">
      <StyledCardImgContainer>
        {hasError ? (
          <StyledCardImg src={`/images/genre/error.jpg`} alt={genre} />
        ) : (
          <StyledCardImg
            src={`/images/genre/${genre}.jpg`}
            alt={genre}
            onError={() => setHasError(true)}
          />
        )}
      </StyledCardImgContainer>
      <StyledCardName>
        {genreTranslated[0].toUpperCase() + genreTranslated.slice(1)}
      </StyledCardName>
    </StyledCard>
  );
}
