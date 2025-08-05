import { RefObject, useEffect, useState } from 'react';

interface IProps {
  ref: RefObject<HTMLElement>;
  handler?: () => void;
}

export function useOnClickOutside({ ref, handler }: IProps): boolean {
  const [isOutside, setIsOutside] = useState(true);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        setIsOutside(false);
        return;
      }

      setIsOutside(true);
      if (handler) {
        return handler();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);

  return isOutside;
}
