import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { BasicDrawer } from './src/navigator/BasicDrawer';
import { Drawer2 } from './src/navigator/Drawer2';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
    return (
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <BasicDrawer /> */}
        <Drawer2 />
      </NavigationContainer>
    );
};

export default App;
