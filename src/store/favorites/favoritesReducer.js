import * as types from './favoritesTypes';

const initialState = {
    list: [],
}

export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_FAVORITES: {
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        }
        case types.REMOVE_FROM_FAVORITES: {
            const filteredList = state.list.filter(item => item.id !== action.payload)
            return {
                ...state,
                list: filteredList
            }
        }
        default: {
            return state;
        }
    }
}