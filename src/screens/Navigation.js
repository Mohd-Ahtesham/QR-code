import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';

import Scanner from './Scanner';
import ScanScreen from './ScanScreen';
import GenerateQr from './GenerateQr';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="GenerateQr" component={GenerateQr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
