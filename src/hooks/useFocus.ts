import { useState, useEffect, RefObject } from 'react';

interface IProps {
  ref: RefObject<HTMLElement>;
}

export function useFocus({ ref }: IProps): boolean {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleFocus = () => setIsFocused(true);
    container.addEventListener('focus', handleFocus);

    return () => {
      container.removeEventListener('focus', handleFocus);
    };
  }, [ref]);

  return isFocused;
}
