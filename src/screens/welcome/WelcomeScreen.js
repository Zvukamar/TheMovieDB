import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';

import * as navigationActions from '../../navigation/actions';
import { colors } from '../../utilities/styles';
import OButton from '../../components/OButton';
import { fetchPopularMovies } from '../../utilities/APIUtils';
import { useDispatch } from 'react-redux';

const WelcomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPopularMovies(1));
    }, []);

    const navigate = (action) => {
        navigation.dispatch(action);
    }

    return (
        <Layout style={s.container} level='1'>
            <OButton
                title='Movies'
                onPress={() => navigate(navigationActions.NavigateToMovies())}
            />
            <OButton
                title='Favorites'
                onPress={() => navigate(navigationActions.NavigateToFavorites())}
            />
            <OButton
                title='Details'
                onPress={() => navigate(navigationActions.NavigateToDetails())}
            />
        </Layout>
    )
}

export default WelcomeScreen;

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.$white,
    },
    button: {
        marginVertical: 10,
        width: '40%'
    }
})