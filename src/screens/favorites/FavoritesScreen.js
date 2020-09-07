import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../utilities/styles';

const FavoritesScreen = () => {
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
        backgroundColor: colors.$white,
    },
})