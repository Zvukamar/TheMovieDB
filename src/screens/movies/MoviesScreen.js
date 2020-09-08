import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { getMoviesSelector } from '../../store/selectors';
import { colors } from '../../utilities/styles';
import OListItem from '../../components/OListItem';

const MoviesScreen = () => {
    const movies = useSelector(getMoviesSelector);
    return (
        <View style={s.container}>
            <FlatList
                data={movies}
                renderItem={({ item }) => <OListItem item={item} />}
                keyExtractor={item => item.id.toString()}
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
})