import { Theme } from '../models/Theme';

export const saveTheme = async (theme: Theme): Promise<void> => {
  try {
    localStorage.setItem('theme', JSON.stringify(theme));
  } catch (error) {
    console.error('Failed to save theme', error);
  }
};
