import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
import { Provider } from 'react-redux';
import store from './store/index';
import LoginHelper from './helpers/login-helper';

export default function App() {
  LoginHelper.updateRequestHeaders();
  return (<>
    <Provider store={store}> 
      <StatusBar style="auto" />
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
    </Provider>
  </>);
}