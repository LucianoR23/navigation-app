/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../screens/Tab1';
import { Tab2 } from '../screens/Tab2';
// import { Tab3 } from '../screens/Tab3';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: { fontSize: 15 },
                // tabBarIcon
            }}
        >
            <Tab.Screen name="Tab1" component={ Tab1 } />
            <Tab.Screen name="Tab2" component={ Tab2 } />
            <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
        </Tab.Navigator>
    );
};
