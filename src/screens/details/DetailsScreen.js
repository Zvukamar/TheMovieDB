import React, { useEffect } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Layout } from '@ui-kitten/components';

import { colors } from '../../utilities/styles';
import Stars from '../../components/OListItem/Stars';

const DetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: item.title })
    }, []);

    return (
        <Layout style={styles.container} level='1'>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                resizeMode='contain'
            />
            <Text style={styles.overview}>{item.overview}</Text>
            <Stars rating={item.vote_average} />
        </Layout>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.$white,
        paddingHorizontal: 20,
    },
    image: {
        width: 350,
        height: 350,
        marginVertical: 30
    },
    overview: {
        fontSize: 14,
        lineHeight: 20
    }
})