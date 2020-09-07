import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const OText = ({ children, ...props }) => {
    return (
        <Text style={s.text} {...props}>
            {children}
        </Text>
    )
}

export default OText;

const s = StyleSheet.create({
    text: {
        marginVertical: 10,
    }
});