import {
  StyledAuthModal,
  StyledAuthModalBtnAuthType,
  StyledAuthModalBtnClose,
  StyledAuthModalBackdrop,
  StyledAuthModalWrap,
} from './AuthModal.styles';
import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { LoginForm } from '../LoginForm';
import { RegistrationForm } from '../RegistrationForm';
import { useModal } from '../../hooks/useModal';
import { useEffect, useRef, useState } from 'react';

export const AuthModal = () => {
  const { isOpen, authType, toggleAuthType, closeModal, handleBackdropClick } =
    useModal();
  const [shouldRender, setShouldRender] = useState(isOpen);
  const logoRef = useRef<HTMLAnchorElement>(null);

  // автоскрол от кнопки к лого на случай если модалка будет "не в полное окно"
  const onToggleAuthType = () => {
    toggleAuthType();

    if (logoRef.current) {
      logoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // фича для стиля анимации фейдаута
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 700);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <StyledAuthModalBackdrop onClick={handleBackdropClick} $isOpen={isOpen}>
      <StyledAuthModal $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <StyledAuthModalWrap $isOpen={isOpen}>
          <Logo src={'/logoWhite.svg'} ref={logoRef}></Logo>
          {authType === 'register' ? <RegistrationForm /> : <LoginForm />}
          <StyledAuthModalBtnAuthType
            onClick={onToggleAuthType}
            aria-label={
              authType === 'register'
                ? 'Перейти к авторизации'
                : 'Перейти к регистрации'
            }
          >
            {authType === 'register' ? 'Регистрация' : 'У меня есть пароль'}
          </StyledAuthModalBtnAuthType>
          <StyledAuthModalBtnClose
            onClick={closeModal}
            aria-label={'Закрыть форму'}
          >
            <Icon name="CloseIcon"></Icon>
          </StyledAuthModalBtnClose>
        </StyledAuthModalWrap>
      </StyledAuthModal>
    </StyledAuthModalBackdrop>
  );
};
