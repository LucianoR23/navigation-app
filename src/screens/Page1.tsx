/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<any, any>{}

export const Page1 = ({ navigation }: Props) => {



    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 1</Text>

            <Button title="Go to page 2" onPress={ () => navigation.navigate('Page2') } />

            <Text>Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={ styles.bigButton } onPress={ () => navigation.navigate('Persona', {
                    id: 1,
                    name: 'Juan',
                }) }>
                    <Text style={ styles.bigButtonText }>Juan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.bigButton } onPress={ () => navigation.navigate('Persona', {
                    id: 2,
                    name: 'Marta',
                }) }>
                    <Text style={ styles.bigButtonText }>Marta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
