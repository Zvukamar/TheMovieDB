import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import screens from '../screens';
import * as names from '../screens/names';
import strings from '../utilities/strings';

const Stack = createStackNavigator();

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={names.WELCOME_SCREEN}
        >

            <Stack.Screen
                name={names.WELCOME_SCREEN}
                component={screens.WelcomeScreen}
                options={{ title: strings.welcome_screen_title }}
            />

            <Stack.Screen
                name={names.MOVIES_SCREEN}
                component={screens.MoviesScreen}
                options={{ title: strings.movies_screen_title, headerBackTitle: strings.movies_screen_back }}
            />

            <Stack.Screen
                name={names.FAVORITES_SCREEN}
                component={screens.FavoritesScreen}
                options={{ title: strings.favorites_screen_title, headerBackTitle: strings.favorites_screen_back }}
            />

            <Stack.Screen
                name={names.DETAILS_SCREEN}
                component={screens.DetailsScreen}
                options={{ title: strings.details_screen_title, headerBackTitle: strings.details_screen_back }}
            />

        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigator;