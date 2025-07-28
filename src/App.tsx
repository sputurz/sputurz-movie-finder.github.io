import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import './main.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter></AppRouter>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
