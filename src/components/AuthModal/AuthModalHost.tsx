import { lazy, Suspense, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectAuthModal } from './AuthModalSlice';
import { Loader } from '../Loader';
import { useAnimation } from '../../hooks/useAnimation';

const AuthModal = lazy(() => import('./AuthModal'));

export default function AuthModalHost() {
  const isOpen = useAppSelector(selectAuthModal);
  const [mounted, setMounted, handleExited] = useAnimation();

  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen, setMounted]);

  if (!mounted) return null;

  return (
    <Suspense fallback={<Loader></Loader>}>
      <AuthModal onExitComplete={handleExited} />
    </Suspense>
  );
}
