import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getMoviesSelector, getCurrectPageSelector } from '../../store/selectors';
import { colors } from '../../utilities/styles';
import OList from '../../components/OList';
import { fetchPopularMovies } from '../../utilities/APIUtils';

const MoviesScreen = () => {
    const dispatch = useDispatch();
    const movies = useSelector(getMoviesSelector);
    const page = useSelector(getCurrectPageSelector);

    const handleOnEndReached = () => {
        dispatch(fetchPopularMovies(page))
    }

    return (
        <View style={s.container}>
            <OList
                data={movies}
                onEndReached={handleOnEndReached}
                ListFooterComponent={() => (
                    <ActivityIndicator
                        style={s.loading}
                        color={colors.$black} />
                )}
            />
        </View>
    )
}

export default MoviesScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.$white,
    },
    loading: {
        marginVertical: 10
    }
})