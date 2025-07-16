import styles from './GenreCard.module.scss';

interface IProps {
	genre: string;
}

export function GenreCard({ genre }: IProps) {
	return (
		<div className={styles.genreCard}>
			<img className={styles.genreCard__img} src="/images/genre/drama.png" alt="" />
			<span className={styles.genreCard__name}>{
				genre[0].toUpperCase() + genre.slice(1)}</span>
		</div>
	);
}
