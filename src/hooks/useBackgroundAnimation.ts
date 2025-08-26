import { useEffect, useState } from 'react';
import { Theme } from '../models/Theme';

/**
 * Хук для перехода анимации фона
 * @param {Theme} theme - текущая тема приложения
 * @returns {boolean} returns.isTransitioning - Флаг выполнения перехода анимации
 *
 * @example
 * const isTransitioning = useBackgroundAnimation(theme);
 *
 * @description
 * Хук для перехода анимации фона. Данный хук необходим для правильной работы
 * анимации со сложными фонами.
 */

export const useBackgroundAnimation = (theme: Theme) => {
  const [prevTheme, setPrevTheme] = useState(theme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (theme !== prevTheme) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setPrevTheme(theme);
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [theme, prevTheme]);

  return isTransitioning;
};
