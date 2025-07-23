import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/page'));
const GenresPage = lazy(() => import('../../pages/GenresPage/page'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/page'));

const routerConfig = [
  { path: '/', component: HomePage },
  { path: '/genres', component: GenresPage },
  { path: '/movies', component: MoviesPage },
] as const;

export const AppRouter = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
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
);
