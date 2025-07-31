import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Container';
import { ErrorFallback } from '../../components/ErrorFallback';
import { MovieCard } from '../../components/MovieCard';
import { TabNav } from '../../components/TabNav';
import { useMovieTop } from '../../hooks/useMovieTop';
import {
  StyledUserProfile,
  StyledUserProfileTabFavorites,
  StyledUserProfileTabFavoritesList,
  StyledUserProfileTabFavoritesListItem,
  StyledUserProfileTitle,
  StyledUserProfileWrap,
} from './UserProfilePage.styles.styles';
import { ReactNode } from 'react';

export default function UserProfilePage({
  children,
}: {
  children?: ReactNode;
}) {
  const { data, error } = useMovieTop();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledUserProfile>
      <Container>
        <StyledUserProfileWrap>
          <StyledUserProfileTitle>Мой аккаунт</StyledUserProfileTitle>
          <TabNav></TabNav>
          {/* <StyledUserProfileTabFavorites>
            <StyledUserProfileTabFavoritesList>
              {data.map((movie) => (
                <StyledUserProfileTabFavoritesListItem key={movie.id}>
                  <MovieCard movie={movie} />
                </StyledUserProfileTabFavoritesListItem>
              ))}
            </StyledUserProfileTabFavoritesList>
          </StyledUserProfileTabFavorites>
           */}
          {children || <Outlet />}
        </StyledUserProfileWrap>
      </Container>
    </StyledUserProfile>
  );
}
