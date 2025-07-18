import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { GenrePage } from './pages/GenrePage';
import { Socials } from './components/Socials';
import { Icon } from './components/Icon';

export function App() {
  return (
    <BrowserRouter>
      <Icon name="ok"></Icon>
      <header className="header"></header>
      <main className="content">
        <Routes>
          <Route path="/" element={<GenrePage />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <Socials></Socials>
        </div>
      </footer>
    </BrowserRouter>
  );
}
