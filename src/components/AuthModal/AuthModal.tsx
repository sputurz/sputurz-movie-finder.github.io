import { useEffect, useRef, useState } from 'react';
import {
  StyledAuthModal,
  StyledAuthModalBtnAuthType,
  StyledAuthModalBtnClose,
  StyledAuthModalWrap,
} from './AuthModal.styles';
import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { LoginForm } from '../LoginForm';
import { RegistrationForm } from '../RegistrationForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeAuthModal, selectAuthModal } from './AuthModalSlice';

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectAuthModal);
  const [authType, setAuthType] = useState<string>('auth');
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Открытие / закрытие через Redux
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden'; // блокировка скролла
    }

    if (!isOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = ''; // возврат скролла
    }
  }, [isOpen]);

  // Закрытие по ESC или клику вне
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dispatch(closeAuthModal());
    };

    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, [dispatch]);

  const handleManualClose = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    } else {
      dispatch(closeAuthModal()); // fallback
    }
  };

  const toggleAuthType = () => {
    setAuthType((prev) => (prev === 'register' ? 'auth' : 'register'));
  };

  useEffect(() => {
    console.log('[MODAL STATE]', {
      isOpen,
      dialogOpen: dialogRef.current?.open,
    });
  }, [isOpen]);

  return (
    <StyledAuthModal
      ref={dialogRef}
      onCancel={() => {
        console.log('cancel triggered');
        dispatch(closeAuthModal());
      }}
    >
      <StyledAuthModalWrap>
        <Logo src={'/logoWhite.svg'}></Logo>
        {authType === 'register' ? <RegistrationForm /> : <LoginForm />}
        <StyledAuthModalBtnAuthType
          onClick={toggleAuthType}
          aria-label={
            authType === 'register'
              ? 'Перейти к авторизации'
              : 'Перейти к регистрации'
          }
        >
          {authType === 'register' ? 'Регистрация' : 'У меня есть пароль'}
        </StyledAuthModalBtnAuthType>
        <StyledAuthModalBtnClose
          onClick={handleManualClose}
          aria-label={'Закрыть форму'}
        >
          <Icon name="CloseIcon"></Icon>
        </StyledAuthModalBtnClose>
      </StyledAuthModalWrap>
    </StyledAuthModal>
  );
};
