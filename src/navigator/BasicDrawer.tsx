import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const BasicDrawer = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator screenOptions={{ drawerType: (width >= 768) ? 'permanent' : 'front'  }}>
            <Drawer.Screen options={{ title: 'Home' }} name="StackNavigator" component={ StackNavigator } />
            <Drawer.Screen /* options={{ title: 'Settings' }} */ name="Settings" component={ Settings } />
        </Drawer.Navigator>
    );
};
