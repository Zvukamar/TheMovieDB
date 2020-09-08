import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';

import { colors } from '../../utilities/styles';
import OButton from '../../components/OButton';
import Stars from '../../components/OListItem/Stars';
import strings from '../../utilities/strings';

const DetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: item.title })
    }, []);

    return (
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                resizeMode='contain'
            />
            <Text style={styles.overview}>{item.overview}</Text>
            <Stars rating={item.vote_average} />
            <OButton title={strings.add_to_favorites} style={styles.favoriteButton} />
        </ScrollView>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        backgroundColor: colors.$white,
    },
    container: {
        alignItems: 'center',
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
    },
    favoriteButton: {
        width: '60%',
        marginTop: 30
    }
})