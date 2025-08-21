import { Icon } from '../Icon';
import * as S from './Nav.styles';

export function Nav() {
  return (
    <S.Wrap>
      <S.LinkItem to={'/'} aria-label="Link to main page">
        <S.LinkText>Main</S.LinkText>
      </S.LinkItem>
      <S.LinkItem to={'/genres'} aria-label="Link to genres page">
        <S.LinkText>Genres</S.LinkText>
        <Icon name="GenresIcon"></Icon>
      </S.LinkItem>
    </S.Wrap>
  );
}
