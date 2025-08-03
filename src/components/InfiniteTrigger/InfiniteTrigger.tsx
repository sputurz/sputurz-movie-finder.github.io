import { useEffect, useRef } from 'react';
import * as S from './InfiniteTrigger.styles';

export function InfiniteTrigger({
  onIntersect,
  disabled,
}: {
  onIntersect: () => void;
  disabled: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    });

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [disabled, onIntersect]);

  return <S.Wrap ref={ref} />;
}
