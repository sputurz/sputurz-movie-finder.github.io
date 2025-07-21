import { BrowserRouter, Link } from 'react-router-dom';
import { Socials } from './components/Socials';
import { AppRouter } from './components/AppRouter';
import { Container } from './components/Container';
import styles from './main.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header className="header">
          <Container>
            <nav>
              <Link to={'/'} className={styles.linkus}>
                Главная
              </Link>
              <Link to={'/genres'} className={styles.linkus}>
                Жанры
              </Link>
            </nav>
          </Container>
        </header>
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
