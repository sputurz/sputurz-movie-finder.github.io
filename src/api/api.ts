import { getMovieGenres } from './GenresPageApi';
import { getMovieRandom, getMovieTop10 } from './HomePageApi';
import { getMovie } from './MoviePageApi';

const Api = {
  getMovieGenres,
  getMovieTop10,
  getMovieRandom,
  getMovie,
};

export default Api;
