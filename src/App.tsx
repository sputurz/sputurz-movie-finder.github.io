import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { GenrePage } from "./pages/GenrePage";
import { Socials } from "./ui/Socials";
import styles from './App.module.scss';

export function App() {
	return (
		<BrowserRouter>
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
			</footer >
		</BrowserRouter>
	);
}
