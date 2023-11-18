/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const Drawer2 = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{ drawerType: (width >= 768) ? 'permanent' : 'front', headerShown: false }}
            drawerContent={ (props) => <MenuList {...props} /> }
        >
            <Drawer.Screen options={{ headerShown: false }} name="StackNavigator" component={ StackNavigator } />
            <Drawer.Screen name="Settings" component={ Settings } />
        </Drawer.Navigator>
    );
};


const MenuList = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <View style={ styles.avatarContainer }>
                <Image source={{
                    uri: 'https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg',
                }}
                style={ styles.avatar } />
            </View>


            <View style={ styles.menuContainer }>
                <TouchableOpacity onPress={ () => navigation.navigate('StackNavigator') } style={ styles.menuButton }>
                    <Text style={ styles.menuItems }>Stack Navigation</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => navigation.navigate('Settings') } style={ styles.menuButton }>
                    <Text style={ styles.menuItems }>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
