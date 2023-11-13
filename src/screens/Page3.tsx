import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const Page3 = ({ navigation }:Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 3</Text>

            <Button title="Go back" onPress={ () => navigation.pop() } />

            <Button title="Go home" onPress={ () => navigation.popToTop() } />

        </View>
    );
};
