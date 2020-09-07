import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../utilities/styles';

const MoviesScreen = () => {
    return (
        <View style={s.container}>
            <Text>Movies Screen</Text>
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