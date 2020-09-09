import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, ScrollView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../utilities/styles';
import OButton from '../../components/OButton';
import Stars from '../../components/OListItem/Stars';
import strings from '../../utilities/strings';
import { addToFavorites, removeFromFavorites } from '../../store/favorites/favoritesActions';
import { showShortToast } from '../../utilities/helpers';
import * as selectors from '../../store/selectors';

const DetailsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { item } = route.params;

    const favorites = useSelector(selectors.getFavoritesSelector);
    const [favorited, setFavorited] = useState(!!(favorites.find(element => element.id === item.id)));

    useEffect(() => {
        navigation.setOptions({ title: item.title })
    }, []);

    const handleOnButton = () => {
        if (favorited) {
            dispatch(removeFromFavorites(item.id))
            showShortToast(strings.toast_removed_from_favorites);
        } else {
            dispatch(addToFavorites(item));
            showShortToast(strings.toast_added_to_favorites);
        }
        setFavorited(f => !f);
    }

    return (
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                resizeMode='contain'
            />
            <Text style={styles.overview}>{item.overview}</Text>
            <Stars rating={item.vote_average} />
            <OButton
                onPress={handleOnButton}
                title={favorited ? strings.remove_from_favorites : strings.add_to_favorites}
                style={styles.favoriteButton} />
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
        ...Platform.select({
            android: { width: '80%' },
            ios: { width: '60%' }
        }),
        marginTop: 30
    }
})