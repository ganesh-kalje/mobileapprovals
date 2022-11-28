import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, DelegationRuleNavigator, SearchStackNavigator, ReportStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="DelegationRule" component={DelegationRuleNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Report" component={ReportStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={SearchStackNavigator} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;