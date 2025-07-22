import { Container } from '../../components/Container/Container';
import Api from '../../api/api';
import { useQuery } from '@tanstack/react-query';

export default function HomePage() {
  // const movieTop10Query = useQuery({
  //   queryFn: () => Api.getMovieTop10(),
  //   queryKey: ['top10'],
  // });

  const movieRandomQuery = useQuery({
    queryFn: () => Api.getMovieRandom(),
    queryKey: ['top10'],
  });

  switch (movieRandomQuery.status) {
    case 'pending':
      return <div>Loader zagluska =0</div>;
    case 'success':
      return (
        <section>
          <Container>
            <h1>Главная</h1>
            <span>{movieRandomQuery.data?.title}</span>
            <div></div>
            <span>{movieRandomQuery.data?.genres}</span>
            <div></div>
            <button onClick={() => movieRandomQuery.refetch()}>
              Повторить запрос
            </button>
            {/* {movieTop10Query.data.map(
              (movie) =>
                movie && (
                  <div key={movie.id}>
                    <span>{movie.title}</span>
                  </div>
                )
            )} */}
          </Container>
        </section>
      );
    case 'error':
      return (
        <div>
          <span style={{ color: 'red' }}>Произошла ошибка</span>
          <button onClick={() => movieRandomQuery.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
  }
}
