import { BrowserRouter } from 'react-router-dom';
import { Socials } from './components/Socials';
import { AppRouter } from './components/AppRouter';
import { Container } from './components/Container';
import './main.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Logo } from './components/Logo';
import { Header } from './components/Header/Header';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header></Header>
        <AppRouter></AppRouter>
        <footer className="footer">
          <Container>
            <Socials></Socials>
          </Container>
        </footer>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
