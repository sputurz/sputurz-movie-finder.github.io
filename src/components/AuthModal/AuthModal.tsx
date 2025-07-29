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

interface AuthModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [authType, setAuthType] = useState<string>('auth');
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleAuthType = () => {
    setAuthType((prev) => (prev === 'register' ? 'auth' : 'register'));
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <StyledAuthModal>
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
        <StyledAuthModalBtnClose onClick={onClose} aria-label={'Закрыть форму'}>
          <Icon name="CloseIcon"></Icon>
        </StyledAuthModalBtnClose>
      </StyledAuthModalWrap>
    </StyledAuthModal>
  );
};
