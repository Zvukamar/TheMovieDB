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
                name={names.HOME_SCREEN}
                component={screens.HomeScreen}
            />

            <Stack.Screen
                name={names.FAVORITES_SCREEN}
                component={screens.FavoritesScreen}
            />

        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigator;