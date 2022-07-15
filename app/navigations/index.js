// Common
import React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import Home from '@screens/Home';
import Trailer from '@screens/Trailer';
import Anime from '@screens/Anime';

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Anime' component={Anime} />
                <Stack.Screen name='Trailer' component={Trailer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
 
export default Navigation;