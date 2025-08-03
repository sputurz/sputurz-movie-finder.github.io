import { forwardRef } from 'react';
import * as S from './Logo.styles.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { closeAuthModal } from '../AuthModal/AuthModalSlice.ts';

interface IProps {
  src: string;
}

export const Logo = forwardRef<HTMLAnchorElement, IProps>(({ src }, ref) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(closeAuthModal());
  };

  return (
    <S.LinkItem
      to="/"
      aria-label="Ссылка на главную страницу"
      ref={ref}
      onClick={handleClick}
    >
      <S.Img src={src} alt="Лого - Маруся" />
    </S.LinkItem>
  );
});
