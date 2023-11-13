import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const Page2 = () => {

    const navigator = useNavigation<StackNavigationProp<any, any>>();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Go back',
        });
    }, [navigator]);


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 2</Text>

            <Button title="Go to page 3" onPress={ () => navigator.navigate('Page3') } />

        </View>
    );
};
