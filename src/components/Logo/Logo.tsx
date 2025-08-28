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
    <S.Wrap>
      <S.LinkItem
        to="/"
        aria-label="Link to main page"
        ref={ref}
        onClick={handleClick}
      >
        <S.Img src={src} alt="Logo" />
      </S.LinkItem>
    </S.Wrap>
  );
});
