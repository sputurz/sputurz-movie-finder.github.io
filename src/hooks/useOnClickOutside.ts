import { RefObject, useEffect, useState } from 'react';

interface IProps {
  ref: RefObject<HTMLElement>;
}

export function useOnClickOutside({ ref }: IProps): boolean {
  const [isOutside, setIsOutside] = useState(true);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const input = container.querySelector('input');
    const handleFocus = () => setIsOutside(false);

    const listener = (event: MouseEvent | TouchEvent) => {
      if (container.contains(event.target as Node)) {
        setIsOutside(false);

        return;
      }
      setIsOutside(true);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    input?.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      input?.removeEventListener('focus', handleFocus);
    };
  }, [ref]);

  return isOutside;
}
