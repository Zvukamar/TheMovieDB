import * as types from './moviesTypes';

export const fetchMovies = () => ({ type: types.FETCH_MOVIES })
export const fetchMoviesSuccess = (payload) => ({ type: types.FETCH_MOVIES_SUCCESS, payload })
export const fetchMoviesFailed = () => ({ type: types.FETCH_MOVIES_FAILED })