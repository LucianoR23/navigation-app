import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export const Tab2 = () => {

    useEffect(() => {
        console.log('Tab2Screen effect');
    }, []);

    return (
        <View>
            <Text>Tab2Screen</Text>
        </View>
    );
};
