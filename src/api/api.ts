import { getProfile, loginUser, logoutUser } from './AuthApi';
import { getMovieGenres } from './GenresPageApi';
import { getMovieRandom, getMovieTop10 } from './HomePageApi';
import { getMovieById } from './MoviePageApi copy';
import { getMovies } from './MoviesPageApi';

const Api = {
  getMovieGenres,
  getMovieTop10,
  getMovieRandom,
  getMovies,
  getMovieById,
  loginUser,
  logoutUser,
  getProfile,
};

export default Api;
