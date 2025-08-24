import { lazy, Suspense, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectAuthModal } from './AuthModalSlice';
import { Loader } from '../Loader';

const AuthModal = lazy(() => import('./AuthModal'));

export default function AuthModalHost() {
  const isOpen = useAppSelector(selectAuthModal);
  const [mounted, setMounted] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <Suspense fallback={<Loader></Loader>}>
      <AuthModal onExitComplete={() => setMounted(false)} />
    </Suspense>
  );
}
