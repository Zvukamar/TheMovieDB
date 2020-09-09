import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import * as selectors from '../../store/selectors';
import OList from '../../components/OList';
import { colors } from '../../utilities/styles';

const FavoritesScreen = () => {
    const favorites = useSelector(selectors.getFavoritesSelector);
    return (
        <View style={s.container}>
            <OList data={favorites} />
        </View>
    )
}

export default FavoritesScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.$white,
    },
})