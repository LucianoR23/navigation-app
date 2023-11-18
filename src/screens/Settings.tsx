/* eslint-disable react/no-unstable-nested-components */
import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props extends DrawerScreenProps<any, any>{}

export const Settings = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button title="Menu" onPress={ () => navigation.toggleDrawer() } />
            ),
        });
    }, [navigation]);

    const insets = useSafeAreaInsets();

    return (
        <View style={{ marginTop: insets.top }}>
            <Text>Settings Screen</Text>
        </View>
    );
};
