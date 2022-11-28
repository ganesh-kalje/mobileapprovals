import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {  CopyprivacyStackNavigator, LogoutStackNavigator, HelpStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: true }} />
            <Drawer.Screen name="Copyright&Privacy" component={CopyprivacyStackNavigator} options={{ headerShown: true }} />
            <Drawer.Screen name="Help" component={HelpStackNavigator} options={{ headerShown: true }} />
            <Drawer.Screen name="Logout" component={LogoutStackNavigator} options={{ headerShown: true }} />
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;