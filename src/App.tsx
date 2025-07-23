import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import './main.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header></Header>
        <main>
          <AppRouter></AppRouter>
        </main>
        <Footer></Footer>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
