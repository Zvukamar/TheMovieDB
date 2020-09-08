import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../../utilities/styles';

const ALLSTARS = 10;

const generateIcon = (key, name) => {
    return <Icon style={styles.icon} key={key} size={20} name={name} color={colors.$black} />
}

const Stars = (props) => {
    const { rating } = props;
    const fullstar = Number.parseInt(rating);
    const halfstar = rating % 1 !== 0;
    let starsBody = [];
    for (let i = 0; i < ALLSTARS; i++) {
        if (fullstar > i) {
            starsBody.push(generateIcon(i, 'star'));
        } else if (fullstar === i && halfstar) {
            starsBody.push(generateIcon(i, 'star-half-empty'))
        } else {
            starsBody.push(generateIcon(i, 'star-o'));

        }
    }
    return (
        <View>
            <Text style={styles.rating}>{`average rating: ${rating}`}</Text>
            <View style={styles.wrapper}>
                {starsBody}
            </View>
        </View>
    )
}

export default Stars;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 3,
        marginRight: 3
    },
    rating: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
        textTransform: 'capitalize'
    }
});