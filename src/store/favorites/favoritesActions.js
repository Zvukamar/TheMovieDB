import * as types from './favoritesTypes';

export const addToFavorites = (movie) => ({
    type: types.ADD_TO_FAVORITES, payload: movie
});

export const removeFromFavorites = (movieId) => ({
    type: types.REMOVE_FROM_FAVORITES,
    payload: movieId
});