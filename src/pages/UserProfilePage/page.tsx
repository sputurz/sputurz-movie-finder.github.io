import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Container';
import { TabNav } from '../../components/TabNav';
import * as S from './UserProfilePage.styles.styles';
import { ReactNode } from 'react';

export default function UserProfilePage({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <S.Wrap>
      <Container>
        <S.Inner>
          <S.Title>Мой аккаунт</S.Title>
          <TabNav></TabNav>
          {children || <Outlet />}
        </S.Inner>
      </Container>
    </S.Wrap>
  );
}
