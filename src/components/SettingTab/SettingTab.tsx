import { useLogout } from '../../hooks/useLogout';
import { selectUser } from '../../store/globalSlices/authSlice';
import { useAppSelector } from '../../store/hooks';
import { Button } from '../Button';
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
            <S.TagKey>Name Surname</S.TagKey>
            <S.TagValue>{`${user?.name} ${user?.surname}`}</S.TagValue>
          </S.TextWrap>
        </S.ListItem>
        <S.ListItem>
          <S.Label>
            <Icon name="MailIcon"></Icon>
          </S.Label>
          <S.TextWrap>
            <S.TagKey>E-mail</S.TagKey>
            <S.TagValue>{user?.email}</S.TagValue>
          </S.TextWrap>
        </S.ListItem>
      </S.List>

      <Button aria-label="Logout" onClick={handleLogout} isLoading={isPending}>
        Logout
      </Button>
    </S.Wrap>
  );
}
