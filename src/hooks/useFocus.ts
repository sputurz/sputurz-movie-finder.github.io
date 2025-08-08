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
    // const handleBlur = () => setIsFocused(false);

    container.addEventListener('focus', handleFocus);
    // container.addEventListener('blur', handleBlur);

    return () => {
      container.removeEventListener('focus', handleFocus);
      // container.removeEventListener('blur', handleBlur);
    };
  }, [ref]);

  return isFocused;
}
