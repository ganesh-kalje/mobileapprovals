import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { CopyprivacyStackNavigator, LogoutStackNavigator, HelpStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { Image } from 'react-native';

import CustomDrawerContent from "../component/UI/CustomDrawerContent";

const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
    
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
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
                drawerItemStyle: { borderColor: 'red' }, headerShown: false, title: 'Home', drawerIcon: () => (
                    <Image source={require('../assets/images/home_icon_active.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                ),
            }} />
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;