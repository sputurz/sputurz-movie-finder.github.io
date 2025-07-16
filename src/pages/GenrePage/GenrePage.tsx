import { GenreCard } from '../GenreCard';
import styles from './GenrePage.module.scss';

const genreList: string[] = [
	"history",
	"horror",
	"scifi",
	"stand-up",
	"fantasy",
	"drama",
	"mystery",
	"family",
	"comedy",
	"romance",
	"music",
	"crime",
	"tv-movie",
	"documentary",
	"action",
	"thriller",
	"western",
	"animation",
	"war",
	"adventure"
]

export function GenrePage() {
	return (
		<section className={styles.genrePage}>
			<div className="container">
				<div className={styles.genrePage__wrap}>
					<h1 className={styles.genrePage__title}>Жанры фильмов</h1>
					<ul className={styles.genrePage__list}>
						{genreList.map((genre) =>
							<li key={genre} className={styles.genrePage__listItem}>
								<GenreCard genre={genre}></GenreCard>
							</li>
						)}
					</ul>
				</div>
			</div>
		</section>
	);
}