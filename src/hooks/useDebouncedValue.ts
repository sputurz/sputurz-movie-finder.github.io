import { useState, useEffect } from 'react';

/**
 * Хук для дебаунсинга значения
 * @template T - Тип значения для дебаунсинга
 * @param {T} value - Исходное значение, которое нужно дебаунсить
 * @param {number} [delay=300] - Задержка в миллисекундах перед обновлением значения
 * @returns {T} Дебауншенное значение, которое обновляется с задержкой
 *
 * @example
 const debouncedSearch = useDebouncedValue(searchValue, 300);
 *
 * @description
 * Хук для дебаунсинга значения. Хук полезен для оптимизации производительности 
 * при частых обновлениях значений, таких как поисковые запросы и др.
 * Принцип работы:
 * 1. При изменении исходного значения запускается таймер
 * 2. Если в течение задержки значение меняется снова, таймер сбрасывается
 * 3. Только после окончания задержки значение обновляется
 */

export function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
