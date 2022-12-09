import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
import { Provider } from 'react-redux';
import store from './store/index';

export default function App() {
  return (<>
    <Provider store={store}> 
      <StatusBar style="auto" />
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
    </Provider>
  </>);
}