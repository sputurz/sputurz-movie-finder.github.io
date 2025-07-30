import { useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeAuthModal, selectAuthModal } from './AuthModalSlice';

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectAuthModal);
  const [authType, setAuthType] = useState<string>('auth');
  // const [shouldRender, setShouldRender] = useState(isOpen);

  const toggleAuthType = () => {
    setAuthType((prev) => (prev === 'register' ? 'auth' : 'register'));
  };

  const closeModal = () => {
    dispatch(closeAuthModal());
    setAuthType('auth');
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeAuthModal());
        setAuthType('auth');
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  // useEffect(() => {
  //   if (isOpen) {
  //     setShouldRender(true);
  //   } else {
  //     const timeout = setTimeout(() => setShouldRender(false), 700);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [isOpen]);

  // if (!shouldRender) return null;

  return (
    <StyledAuthModalBackdrop onClick={handleBackdropClick} $isOpen={isOpen}>
      <StyledAuthModal $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <StyledAuthModalWrap $isOpen={isOpen}>
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
