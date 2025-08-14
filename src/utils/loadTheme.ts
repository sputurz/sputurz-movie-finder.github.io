import { Theme } from '../models/Theme';
import { saveTheme } from './saveTheme';

export const loadTheme = (): Theme => {
  try {
    const theme = localStorage.getItem('theme');

    return theme ? JSON.parse(theme) : 'dark';
  } catch (error) {
    console.error('Failed to load theme', error);
    saveTheme('dark');

    return 'dark';
  }
};
