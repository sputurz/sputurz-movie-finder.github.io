import { useEffect, useState } from 'react';
import { Theme } from '../models/Theme';

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
