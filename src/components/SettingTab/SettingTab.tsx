import { useCallback } from 'react';
import { clearUser } from '../../store/globalSlices/authSlice';
import {
  StyledSettingTab,
  StyledSettingTabBtnLogout,
} from './SettingTab.styles';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';

export default function SettingTab() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: () => Api.logoutUser(),
    onSuccess: () => {
      dispatch(clearUser());
      queryClient.removeQueries({ queryKey: ['me'] });
      navigate('/', { replace: true });
    },
    onError: () => {
      dispatch(clearUser());
      queryClient.removeQueries({ queryKey: ['me'] });
      navigate('/', { replace: true });
    },
  });

  const handleLogout = useCallback(() => {
    logoutMutation.mutate();
  }, [logoutMutation]);

  return (
    <StyledSettingTab>
      <StyledSettingTabBtnLogout
        onClick={handleLogout}
        disabled={logoutMutation.isPending}
      >
        Выйти из аккаунта
      </StyledSettingTabBtnLogout>
    </StyledSettingTab>
  );
}
