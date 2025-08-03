import { Icon } from '../Icon';
import * as S from './Nav.styles';

export function Nav() {
  return (
    <S.Wrap>
      <S.LinkItem to={'/'} aria-label="Ссылка на главную страницу">
        <S.LinkText>Главная</S.LinkText>
      </S.LinkItem>
      <S.LinkItem to={'/genres'} aria-label="Ссылка на страницу с жанрами">
        <S.LinkText>Жанры</S.LinkText>
        <Icon name="GenresIcon"></Icon>
      </S.LinkItem>
    </S.Wrap>
  );
}
