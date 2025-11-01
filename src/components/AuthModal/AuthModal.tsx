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

type IProps = {
  onExitComplete?: () => void;
};

export default function AuthModal({ onExitComplete }: IProps) {
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

  const logoRef = useRef<HTMLAnchorElement>(null);

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsAnimatingOut(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (isAnimatingOut) {
      setIsAnimatingOut(false);
      onExitComplete?.();
    }
  };

  const handleBackdropClickSafe = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimatingOut) return;
    handleBackdropClick(e);
  };

  return (
    <S.Backdrop
      onClick={handleBackdropClickSafe}
      onAnimationEnd={handleAnimationEnd}
      $isOpen={!isAnimatingOut && isOpen}
    >
      <S.Wrap
        $isOpen={!isAnimatingOut && isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <S.Inner>
          <Logo
            src={theme == 'dark' ? '/.logoBlack.svg' : '/.logoWhite.svg'}
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
                  authType === 'register' ? 'Go to Log In' : 'Go to Sing Up'
                }
              >
                {authType === 'register'
                  ? 'Already have an account?'
                  : ' Sign Up'}
              </S.BtnAuthType>
            </>
          ) : (
            <>
              <S.SuccsessTitle>Sign Up succsess!</S.SuccsessTitle>
              <S.SuccsessText>Use your e-mail to Log In</S.SuccsessText>
              <Button onClick={onSuccessBtnClick} kind="auth">
                Log In
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
