import { useState, useRef, useEffect } from 'react';

export function useFocus() {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const setRef = (node: HTMLInputElement | null) => {
    ref.current = node;
  };

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    container.addEventListener('focus', handleFocus);
    container.addEventListener('blur', handleBlur);

    return () => {
      container.removeEventListener('focus', handleFocus);
      container.removeEventListener('blur', handleBlur);
    };
  }, []);

  return { isFocused, setRef };
}
