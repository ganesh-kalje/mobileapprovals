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
import NotificationDetailsScreen from "../screens/Home/NotificationDetailsScreen";
import LinesScreen from "../screens/Home/LinesScreen";
import ActionHistoryScreen from "../screens/Home/ActionHistoryScreen";
import AttachmentScreen from "../screens/Home/AttachmentScreen";
import HeaderLeftBar from "../component/UI/HeaderLeftSection";
import SearchUserScreen from "../component/UI/Reassign/SearchUserScreen";
import NotificationDetailsCarScreen from "../screens/Home/NotificationDetailsCarScreen";
import Reassign from "../screens/Home/Reassign";
import RequestInfo from "../screens/Home/RequestInfo";
import SearchUserRoot from "./SearchUserNavigator";
import StateSearchScreen from "../screens/Home/StateSearchScreen";
import GlCodeSearch from "../screens/Home/GlCodeSearch";
import LineCarScreen from "../screens/Home/cars/LinesCarScreen";
import LineListCar from "../screens/Home/cars/LineListCar";


const Stack = createNativeStackNavigator();


const stackOptions = {
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
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="HomeNavigator" component={HomeScreen} options={{ headerShown: true, headerLeft: HeaderLeftBar, title: 'Home', headerTitleAlign: 'center' }} />
            <Stack.Screen name="PendingAction" component={PendingActionScreen} options={{ headerShown: true, title: 'Pending Action', headerTitleAlign: 'center' }} />
            <Stack.Screen name="NotificationDetails" component={NotificationDetailsScreen} options={{ headerShown: true, title: 'Notification Details', headerTitleAlign: 'center' }} />
            <Stack.Screen name="NotificationCar" component={NotificationDetailsCarScreen} options={{ headerShown: true, title: 'Notification Car', headerTitleAlign: 'center' }} />
            <Stack.Screen name="Lines" component={LinesScreen} options={{ headerShown: true, title: 'Lines', headerTitleAlign: 'center' }} />
            <Stack.Screen name="ActionHistory" component={ActionHistoryScreen} options={{ headerShown: true, title: 'Action History', headerTitleAlign: 'center' }} />
            <Stack.Screen name="Attachment" component={AttachmentScreen} options={{ headerShown: true, title: 'Attachments', headerTitleAlign: 'center' }} />
            <Stack.Screen name="Reassign" component={Reassign} options={{ headerShown: true, title: 'Reassign', headerTitleAlign: 'center' }} />
            <Stack.Screen name="RequestInfo" component={RequestInfo} options={{ headerShown: true, title: 'RequestInfo', headerTitleAlign: 'center' }} />
            <Stack.Screen name="SearchUserRoot" component={SearchUserRoot} options={{ headerShown: false }} />
            <Stack.Screen name="StateSearch" component={StateSearchScreen} options={{ headerShown: true, title: 'Select State of Service', headerTitleAlign: 'center' }} />
            <Stack.Screen name="GLCodeSearch" component={GlCodeSearch} options={{ headerShown: true, title: 'Search Gl Code', headerTitleAlign: 'center' }} />
            <Stack.Screen name="LinesCar" component={LineCarScreen} options={{ headerShown: true, title: 'Lines', headerTitleAlign: 'center' }} />
            <Stack.Screen name="LineListCar" component={LineListCar} options={{ headerShown: true, title: 'Lines', headerTitleAlign: 'center' }} />
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