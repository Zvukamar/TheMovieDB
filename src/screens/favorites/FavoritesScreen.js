import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../../utilities/styles';
import * as selectors from '../../redux/selectors';
import OText from '../../components/OText';
import strings from '../../utilities/strings';

const FavoritesScreen = () => {
    const favorites = useSelector(selectors.getFavoriteMovies);
    if (favorites.length === 0) {
        return (
            <View style={s.container}>
                <OText category='h4' status='danger'>
                    {strings.favorites_list_empty}
                </OText>
            </View>
        )
    }
    return (
        <View style={s.container}>
            <Text>Favorites Screen</Text>
        </View>
    )
}

export default FavoritesScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.$white,
    },
})