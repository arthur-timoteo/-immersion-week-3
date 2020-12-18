import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Contato from './pages/Contato';

import { Text } from 'react-native';

const Stack = createStackNavigator();

function routes() {

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor:'#161616',
        },
        headerTintColor: '#ebb105',
        headerBackTitle: 'Voltar'
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contato" component={Contato} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default routes;