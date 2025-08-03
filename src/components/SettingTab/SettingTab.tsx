import { useLogout } from '../../hooks/useLogout';
import { selectUser } from '../../store/globalSlices/authSlice';
import { useAppSelector } from '../../store/hooks';
import { Icon } from '../Icon';
import * as S from './SettingTab.styles';

export default function SettingTab() {
  const { handleLogout, isPending } = useLogout();
  const user = useAppSelector(selectUser);

  return (
    <S.Wrap>
      <S.List>
        <S.ListItem>
          <S.Label>{`${user?.name[0]}${user?.surname[0]}`}</S.Label>
          <S.TextWrap>
            <S.TagKey>Имя Фамилия</S.TagKey>
            <S.TagValue>{`${user?.name} ${user?.surname}`}</S.TagValue>
          </S.TextWrap>
        </S.ListItem>
        <S.ListItem>
          <S.Label>
            <Icon name="MailIcon"></Icon>
          </S.Label>
          <S.TextWrap>
            <S.TagKey>Электронная почта</S.TagKey>
            <S.TagValue>{user?.email}</S.TagValue>
          </S.TextWrap>
        </S.ListItem>
      </S.List>

      <S.BtnLogout onClick={handleLogout} disabled={isPending}>
        Выйти из аккаунта
      </S.BtnLogout>
    </S.Wrap>
  );
}
