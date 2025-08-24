import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useAuthInit } from '../../hooks/useAuthInit';
import { ErrorBoundary } from 'react-error-boundary';
import { lazy, Suspense } from 'react';
import AuthModalHost from '../AuthModal/AuthModalHost';
import { ScrollToTop } from '../ScrollToTop';

const HomePage = lazy(() => import('../../pages/HomePage/page'));
const GenresPage = lazy(() => import('../../pages/GenresPage/page'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/page'));
const MoviePage = lazy(() => import('../../pages/MoviePage/page'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/page'));
const UserProfilePage = lazy(() => import('../../pages/UserProfilePage/page'));
const SettingTab = lazy(() => import('../../components/SettingTab/SettingTab'));
const FavoritesTab = lazy(
  () => import('../../components/FavoritesTab/FavoritesTab')
);
const ProtectedRoute = lazy(
  () => import('../../components/ProtectedRoute/ProtectedRoute')
);

const MoviePageWithKey = () => {
  const location = useLocation();
  return <MoviePage key={location.pathname} />;
};

const routerConfig = [
  { path: '/', component: HomePage },
  { path: '/genres', component: GenresPage },
  { path: '/movies', component: MoviesPage },
  {
    path: '/movie/:movieId',
    component: MoviePageWithKey,
  },
  {
    path: '/profile/*',
    component: () => (
      <ProtectedRoute>
        <UserProfilePage>
          <Routes>
            <Route index element={<Navigate to="favorites" replace />} />
            <Route path="favorites" element={<FavoritesTab />} />
            <Route path="settings" element={<SettingTab />} />
          </Routes>
        </UserProfilePage>
      </ProtectedRoute>
    ),
  },
  { path: '*', component: NotFoundPage },
] as const;

export const AppRouter = () => {
  useAuthInit();

  return (
    <ErrorBoundary
      fallback={
        <main>
          <ErrorFallback>
            Something went wrong. Please reload the page.
          </ErrorFallback>
        </main>
      }
    >
      <Suspense fallback={<Loader></Loader>}>
        <Header />
        <AuthModalHost />
        <main>
          <ScrollToTop />
          <Routes>
            {routerConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};
