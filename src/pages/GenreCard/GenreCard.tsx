import { StyledCard, StyledCardImg, StyledCardName } from './GenreCard.styles';

interface IProps {
  genre: string;
}

export function GenreCard({ genre }: IProps) {
  return (
    <StyledCard>
       <StyledCardImg src="/images/genre/drama.png" alt=""></StyledCardImg>
      <StyledCardName>{genre[0].toUpperCase() + genre.slice(1)}</StyledCardName>
    </StyledCard>
  );
}
