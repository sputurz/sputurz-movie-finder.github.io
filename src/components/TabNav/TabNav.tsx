import { Icon } from '../Icon';
import * as S from './TabNav.styles';

export function TabNav() {
  return (
    <S.Wrap>
      <S.LinkItem to="/profile/favorites">
        <Icon name="LikeIcon"></Icon>
        <span>Избранное</span>
      </S.LinkItem>
      <S.LinkItem to="/profile/settings">
        <Icon name="UserIcon"></Icon>
        <span>Настройки</span>
      </S.LinkItem>
    </S.Wrap>
  );
}
