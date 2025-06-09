import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import RegistroScreen from '../screens/RegistroScreen';
import LoginScreen from '../screens/LoginScreen';
import PanelProductorScreen from '../screens/PanelProductorScreen';
import PanelConsumidorScreen from '../screens/PanelConsumidorScreen';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PanelProductor" component={PanelProductorScreen} />
        <Stack.Screen name="PanelConsumidor" component={PanelConsumidorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
