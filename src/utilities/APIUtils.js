import axios from 'axios';
import Config from 'react-native-config';
import { fetchMoviesSuccess, fetchMovies, fetchMoviesFailed } from '../store/movies/moviesActions';

const base = 'https://api.themoviedb.org/3/movie'

const getURL = (page) => (
    `${base}/top_rated?api_key=${Config.API_KEY}&language=en-US&page=${page}`
)

export const fetchPopularMovies = (page) => {
    return async (dispatch) => {
        const url = getURL(page);
        try {
            dispatch(fetchMovies())
            const response = await axios.get(url);
            const { data } = response;
            const { results } = data;
            console.log(results)
            dispatch(fetchMoviesSuccess(results))
        } catch (e) {
            dispatch(fetchMoviesFailed())
        }
    }
} 