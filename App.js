import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (<>
    <StatusBar style="auto" />
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  </>);
}