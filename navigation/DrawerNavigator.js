import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CopyprivacyStackNavigator, LogoutStackNavigator, HelpStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const navigate = useNavigation();
    console.log('drwaer focused ' , navigate.isFocused())

    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#00619a' },
            headerTintColor: 'white',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            drawerContentStyle: { backgroundColor: '#00619a' },
            drawerActiveBackgroundColor: '#00619a',
            drawerStyle: {
             
              backgroundColor: '#00619a',
              
              width: 240,
            },
          }}>
            <Drawer.Screen name="HomeDrwa" component={TabNavigator} options={{
                drawerItemStyle: { borderColor: 'red'}, headerShown: true, title: 'Home', drawerIcon: () => (
                    <Image source={require('../assets/images/home_icon_active.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                ),
            }} />

            <Drawer.Screen name="Copyright&Privacy" component={CopyprivacyStackNavigator} options={{
                headerShown: false,
                title: 'CopyRight & Privacy',
                drawerIcon: () => (
                    <Image source={require('../assets/images/copyright_icon_active.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                )
            }} />

            <Drawer.Screen name="Help" component={HelpStackNavigator} options={{
                headerShown: true, title: 'Help',
                drawerIcon: () => (
                    <Image source={require('../assets/images/help_icon_active.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                )
            }} />

            <Drawer.Screen name="Logout" component={LogoutStackNavigator} options={{
                headerShown: true, title: 'Logout',
                drawerIcon: () => (
                    <Image source={require('../assets/images/Logout_icon_active.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                )
            }} />
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;