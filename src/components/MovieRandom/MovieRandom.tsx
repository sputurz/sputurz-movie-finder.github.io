import { useMovieRandom } from '../../hooks/useMovieRandom';
import { Container } from '../Container';
import { Icon } from '../Icon';
import {
  StyledRandom,
  StyledRandomPlot,
  StyledRandomTitle,
  StyledRandomBtnUpd,
  StyledRandomLink,
  StyledRandomRating,
  StyledRandomGenres,
  StyledRandomGenre,
  StyledRandomYear,
  StyledRandomRuntime,
  StyledRandomImg,
  StyledRandomWrap,
} from './MovieRandom.styles';

export function MovieRandom() {
  const { data, error, isLoading, refetch } = useMovieRandom();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <StyledRandom>
      <Container>
        <StyledRandomWrap>
          <StyledRandomImg src={data?.backdropUrl}></StyledRandomImg>
          <StyledRandomRating>{data?.tmdbRating}</StyledRandomRating>
          <StyledRandomYear>{data?.releaseDate}</StyledRandomYear>
          <StyledRandomGenres>
            {data?.genres.map((genre, index) => (
              <StyledRandomGenre key={genre + index}>{genre}</StyledRandomGenre>
            ))}
          </StyledRandomGenres>
          <StyledRandomRuntime>{data?.runtime}</StyledRandomRuntime>
          <StyledRandomTitle>{data?.title}</StyledRandomTitle>
          <StyledRandomPlot>{data?.plot}</StyledRandomPlot>
          <StyledRandomBtnUpd
            onClick={() => {
              refetch();
            }}
          >
            <Icon name="UpdateIcon"></Icon>
          </StyledRandomBtnUpd>
          <StyledRandomLink to={`movie/${data?.id}`}>О фильме</StyledRandomLink>
        </StyledRandomWrap>
      </Container>
    </StyledRandom>
  );
}
