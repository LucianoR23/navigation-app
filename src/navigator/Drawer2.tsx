/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const Drawer2 = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{ drawerType: (width >= 768) ? 'permanent' : 'front' }}
            drawerContent={ (props) => <MenuList {...props} /> }
        >
            <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
            <Drawer.Screen name="Settings" component={ Settings } />
        </Drawer.Navigator>
    );
};


const MenuList = (props: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <View style={ styles.avatarContainer }>
                <Image source={{
                    uri: 'https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg',
                }}
                style={ styles.avatar } />
            </View>
        </DrawerContentScrollView>
    );
};
