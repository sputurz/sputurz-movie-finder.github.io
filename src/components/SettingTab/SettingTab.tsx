import { useLogout } from '../../hooks/useLogout';
import { selectUser } from '../../store/globalSlices/authSlice';
import { selectTheme, toggleTheme } from '../../store/globalSlices/themeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../Button';
import { Icon } from '../Icon';
import * as S from './SettingTab.styles';

export default function SettingTab() {
  const { handleLogout, isPending } = useLogout();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const theme = useAppSelector(selectTheme);

  const onTheme = () => {
    dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'));
  };

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

      <Button onClick={onTheme}>
        {theme === 'dark'
          ? 'Сменить тему на светлую'
          : 'Сменить тему на темную'}
      </Button>

      <Button onClick={handleLogout} isLoading={isPending}>
        Выйти из аккаунта
      </Button>
    </S.Wrap>
  );
}
