import { useState, useEffect, RefObject } from 'react';

interface IProps {
  ref: RefObject<HTMLElement>;
}

/**
 * Хук для отслеживания состояния фокуса на HTML-элементе
 * @param {IProps} props - Параметры хука
 * @param {RefObject<HTMLElement>} props.ref - Реф объекта элемента, за которым нужно следить
 * @returns {boolean} Состояние фокуса
 *
 * @example
 * const inputRef = useRef<HTMLInputElement>(null);
 * const isInputFocused = useFocus({ ref: inputRef });
 *
 * <input
 *   ref={inputRef}
 *   className={isInputFocused ? 'focused' : ''}
 *   placeholder="Введите текст..."
 * />
 *
 * @description
 * Хук отслеживает события фокуса на указанном HTML-элементе.
 * Для работы хука элемент должен быть фокусируемым (иметь tabIndex или быть по умолчанию фокусируемым).
 */

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
