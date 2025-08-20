import * as S from './AuthModal.styles';
import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { LoginForm } from '../LoginForm';
import { RegistrationForm } from '../RegistrationForm';
import { useModal } from '../../hooks/useModal';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { useAppSelector } from '../../store/hooks';
import { selectTheme } from '../../store/globalSlices/themeSlice';

export default function AuthModal() {
  const theme = useAppSelector(selectTheme);

  const {
    isOpen,
    authType,
    toggleAuthType,
    closeModal,
    handleBackdropClick,
    isRegisterSuccess,
    onSuccessRegister,
    onSuccessBtnClick,
  } = useModal();

  const [shouldRender, setShouldRender] = useState(isOpen);

  const logoRef = useRef<HTMLAnchorElement>(null);

  // !пока в бэта тесте =))
  // автоскрол от кнопки к лого на случай если модалка будет "не в полное окно"
  // const onToggleAuthType = () => {
  //   toggleAuthType();

  //   if (logoRef.current) {
  //     logoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

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
    <S.Backdrop onClick={handleBackdropClick} $isOpen={isOpen}>
      <S.Wrap $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <S.Inner $isOpen={isOpen}>
          <Logo
            src={theme == 'dark' ? '/logoBlack.svg' : '/logoWhite.svg'}
            ref={logoRef}
          ></Logo>
          {!isRegisterSuccess ? (
            <>
              {authType === 'register' ? (
                <RegistrationForm onSuccess={onSuccessRegister} />
              ) : (
                <LoginForm />
              )}
              <S.BtnAuthType
                onClick={toggleAuthType}
                aria-label={
                  authType === 'register' ? 'Go to login' : 'Go to register'
                }
              >
                {authType === 'register' ? 'I have a password' : 'Registration'}
              </S.BtnAuthType>
            </>
          ) : (
            <>
              <S.SuccsessTitle>Registration succsess</S.SuccsessTitle>
              <S.SuccsessText>Use your email to login</S.SuccsessText>
              <Button onClick={onSuccessBtnClick} kind="auth">
                Login
              </Button>
            </>
          )}
          <S.BtnClose onClick={closeModal} aria-label={'Close form'}>
            <Icon name="CloseIcon"></Icon>
          </S.BtnClose>
        </S.Inner>
      </S.Wrap>
    </S.Backdrop>
  );
}
