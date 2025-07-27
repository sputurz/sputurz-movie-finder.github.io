import { getMovieGenres } from './GenresPageApi';
import { getMovieRandom, getMovieTop10 } from './HomePageApi';
import { getMovie, getMovieById } from './MoviePageApi';

const Api = {
  getMovieGenres,
  getMovieTop10,
  getMovieRandom,
  getMovie,
  getMovieById,
};

export default Api;
