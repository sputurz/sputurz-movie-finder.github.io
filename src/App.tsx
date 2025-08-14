import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyle } from './styles/global';
import { selectTheme } from './store/globalSlices/themeSlice';
import { useAppSelector } from './store/hooks';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/utils/themes';

const queryClient = new QueryClient();

export function App() {
  const theme = useAppSelector(selectTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <AppRouter></AppRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
