import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import SearchScreen from "../screens/SearchScreen";
import DelegationRuleScreen from "../screens/DelegationRuleScreen";
import CopyrightScreen from "../screens/CopyrightScreen";
import HelpScreen from "../screens/HelpScreen";
import LogoutScreen from "../screens/LogoutScreen";
import PendingActionScreen from "../screens/Home/PendingActionScreen";
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();


const stackOptions = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",


};

const MainStackNavigator = () => {
    const navigate = useNavigation();
    console.log('stack focused' , navigate.isFocused())
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="HomeNavigator" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PendingAction" component={PendingActionScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const DelegationRuleNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="DelegateRuleNavigator" component={DelegationRuleScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="SearchNavigator" component={SearchScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

const ReportStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="ReportNavigator" component={ReportScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const CopyprivacyStackNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={stackOptions}>
            <Stack.Screen name="CopyNavigator" component={CopyrightScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const HelpStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="HelpNavigator" component={HelpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const LogoutStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="LogoutNavigator" component={LogoutScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, DelegationRuleNavigator, SearchStackNavigator, 
    ReportStackNavigator, CopyprivacyStackNavigator, HelpStackNavigator, LogoutStackNavigator };