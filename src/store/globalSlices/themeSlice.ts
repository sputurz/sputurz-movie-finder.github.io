import { Theme } from '../../models/Theme';
import { loadTheme } from '../../utils/loadTheme';
import { saveTheme } from '../../utils/saveTheme';
import { createAppSlice } from '../createAppSlice';

const initialState: Theme = loadTheme();

export const themeSlice = createAppSlice({
  name: 'theme',

  initialState: initialState,

  reducers: {
    toggleTheme: (theme, action) => {
      theme = action.payload;
      saveTheme(theme);

      return theme;
    },
  },

  selectors: {
    selectTheme: (theme) => theme,
  },
});

export const { toggleTheme } = themeSlice.actions;
export const { selectTheme } = themeSlice.selectors;
