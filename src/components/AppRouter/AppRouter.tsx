import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';

const HomePage = lazy(() => import('../../pages/HomePage/page'));
const GenresPage = lazy(() => import('../../pages/GenresPage/page'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/page'));
const MoviePage = lazy(() => import('../../pages/MoviePage/page'));

const routerConfig = [
  { path: '/', component: HomePage },
  { path: '/genres', component: GenresPage },
  { path: '/movies', component: MoviesPage },
  { path: '/movie/:movieId', component: MoviePage },
] as const;

export const AppRouter = () => (
  <ErrorBoundary
    fallback={
      <ErrorFallback>
        Что-то пошло не так. Пожалуйста, перезагрузите страницу.
      </ErrorFallback>
    }
  >
    <Suspense fallback={<Loader></Loader>}>
      <Routes>
        {routerConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  </ErrorBoundary>
);
