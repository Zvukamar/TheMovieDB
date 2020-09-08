import * as types from './appTypes';

const initialState = {
    movies: [],
    favorites: []
}

export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_FAVORITES: {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case types.REMOVE_FROM_FAVORITES: {
            // TODO: logic for remove 
            return state;
        }
        default: {
            return state;
        }
    }
}