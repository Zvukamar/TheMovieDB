import * as types from './moviesTypes';

const initialState = {
    list: [],
    error: false,
    loading: false,
}

export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIES: {
            return { ...state, loading: true }
        }
        case types.FETCH_MOVIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                list: [...state.list, ...action.payload]
            }
        }
        case types.FETCH_MOVIES_FAILED: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default: {
            return state;
        }
    }
}