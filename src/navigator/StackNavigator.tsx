import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1, Page2, Page3, Persona } from '../screens';

export type RootStackParams = {
    Page1: undefined,
    Page2: undefined,
    Page3: undefined,
    Persona: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
            // initialRouteName="Page2"
        >
            <Stack.Screen name="Page1" options={{ title: 'Page 1' }} component={ Page1 } />
            <Stack.Screen name="Page2" options={{ title: 'Page 2' }} component={ Page2 } />
            <Stack.Screen name="Page3" options={{ title: 'Page 3' }} component={ Page3 } />
            <Stack.Screen name="Persona" options={{ title: 'Persona' }} component={ Persona } />
        </Stack.Navigator>
    );
};
