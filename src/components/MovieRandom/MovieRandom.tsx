import { useState } from 'react';
import { useMovieRandom } from '../../hooks/useMovieRandom';
import { Container } from '../Container';
import { ErrorFallback } from '../ErrorFallback';
import { MoviePromo } from '../MoviePromo';
import { StyledRandom } from './MovieRandom.styles';

export const MovieRandom = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const { data, error, isLoading, isFetching, refetch } = useMovieRandom();

  const handleRefetch = async () => {
    setIsRefetching(true);
    try {
      await refetch();
    } finally {
      setIsRefetching(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledRandom>
      <Container>
        <MoviePromo
          movie={data}
          onUpdate={handleRefetch}
          isFetching={isFetching}
        />
      </Container>
    </StyledRandom>
  );
};
