import { combineReducers } from 'redux';

import moviesReducer from './movies/moviesReducer';
import favoritesReducer from './favorites/favoritesReducer';

export default combineReducers({
    movies: moviesReducer,
    favorites: favoritesReducer
})