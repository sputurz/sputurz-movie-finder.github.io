import { RefObject, useEffect, useState } from 'react';

interface IProps {
  ref: RefObject<HTMLElement>;
}

/**
 * Хук для определения кликов вне элемента и отслеживания фокуса на input
 * @param {IProps} props - Параметры хука
 * @param {RefObject<HTMLElement>} props.ref - Реф объекта элемента, за которым
 * нужно следить
 * @returns {boolean} Состояние: true если клик был вне элемента или input не в фокусе, false если внутри или input в фокусе
 *
 * @example
 * const wrapRef = useRef<HTMLLabelElement>(null);
 * const isOutside = useOnClickOutside({
 *   ref: wrapRef,
 * });
 *
 * @description
 * Хук отслеживает два типа событий:
 * 1. Клики (мышь и touch) вне указанного элемента - устанавливает isOutside в
 * true
 * 2. Фокус на любом input внутри элемента - устанавливает isOutside в false
 *
 * Особенности поведения:
 * - При клике внутри элемента isOutside = false
 * - При клике вне элемента isOutside = true
 * - При фокусе на input внутри элемента isOutside = false (даже если был клик вне)
 */

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
