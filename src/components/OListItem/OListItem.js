import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../utilities/styles';
import Stars from './Stars';
import { NavigateToDetails } from '../../navigation/actions';

const OListItem = ({ item }) => {
    const navigation = useNavigation();

    const displayDetails = () => {
        navigation.dispatch(NavigateToDetails(item))
    }

    return (
        <View style={styles.itemWrapper}>
            <TouchableOpacity onPress={displayDetails}>
                <Text style={styles.title}>{item.title}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <View>
                <Stars rating={item.vote_average} />
            </View>
        </View>
    );
}

export default OListItem;

const styles = StyleSheet.create({
    itemWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
        marginLeft: 40,
        marginRight: 40
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        alignSelf: 'center'
    },
    image: {
        width: 350,
        height: 350,
        marginBottom: 10
    },
    name: {
        color: colors.$white,
        fontSize: 30,
        textTransform: 'uppercase'
    }
});