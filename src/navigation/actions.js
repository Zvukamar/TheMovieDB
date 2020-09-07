import { CommonActions } from '@react-navigation/native';

import * as names from '../screens/names';

export const NavigateToMovies = () => (
    CommonActions.navigate({
        name: names.MOVIES_SCREEN,
    })
);

export const NavigateToFavorites = () => (
    CommonActions.navigate({
        name: names.FAVORITES_SCREEN,
    })
);

export const NavigateToDetails = () => (
    CommonActions.navigate({
        name: names.DETAILS_SCREEN,
    })
);