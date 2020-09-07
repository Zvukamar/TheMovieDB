import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Layout } from '@ui-kitten/components';

import { colors } from '../../utilities/styles';

const DetailsScreen = ({ navigation }) => {

    return (
        <Layout style={s.container} level='1'>
            <Text>Details Screen</Text>
        </Layout>
    )
}

export default DetailsScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.$white,
    },
})