import { useState } from 'react';
import {
  StyledAuthModal,
  StyledAuthModalBtnAuthType,
  StyledAuthModalBtnClose,
  StyledAuthModalWrap,
} from './AuthModal.styles';
import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { LoginForm } from '../LoginForm';

export const AuthModal = () => {
  const [authType, setAuthType] = useState<string>('auth');

  const handleClick = () => {
    setAuthType((prevState) =>
      prevState === 'register' ? 'auth' : 'register'
    );
  };

  return (
    <StyledAuthModal>
      <StyledAuthModalWrap>
        <Logo src={'/logoWhite.svg'}></Logo>
        {/* {authType === 'register' ? <RegisterForm /> : <LoginForm />} */}
        <LoginForm></LoginForm>
        <StyledAuthModalBtnAuthType
          onClick={handleClick}
          aria-label={
            authType === 'register'
              ? 'Нажмите чтобы перейти на форму регистрации'
              : 'Нажмите если у Вас есть пароль'
          }
        >
          {authType === 'register' ? 'Регистрация' : 'У меня есть пароль'}
        </StyledAuthModalBtnAuthType>
        <StyledAuthModalBtnClose aria-label={'Закрыть форму'}>
          <Icon name="CloseIcon"></Icon>
        </StyledAuthModalBtnClose>
      </StyledAuthModalWrap>
    </StyledAuthModal>
  );
};
