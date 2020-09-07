import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '@ui-kitten/components';

const OButton = ({ title, onPress }) => {
    return (
        <Button
            style={s.button}
            onPress={onPress}
            appearance='outline'>
            {title}
        </Button>
    )
}

export default OButton;

const s = StyleSheet.create({
    button: {
        marginVertical: 10,
        width: '40%'
    }
})

OButton.propTypes = {
    title: PropTypes.string.isRequired
}