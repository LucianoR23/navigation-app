/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';


// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Page1 = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button title="Menu" onPress={ () => navigation.toggleDrawer() } />
            ),
        });
    }, [navigation]);


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
