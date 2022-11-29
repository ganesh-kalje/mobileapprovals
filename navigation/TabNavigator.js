import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, DelegationRuleNavigator, SearchStackNavigator, ReportStackNavigator } from "./StackNavigator";
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#00619A',
            tabBarInactiveBackgroundColor: '#0272B6',
            
        }}>
            <Tab.Screen name="Home" component={MainStackNavigator} options={{
                headerShown: false, title: 'Home',
                tabBarIcon: ({ focused }) => {
                    return focused ? <Image source={require('../assets/images/Homeactive.png')}
                        fadeDuration={0} style={{ width: 20, height: 22 }}
                    /> : <Image source={require('../assets/images/Homeinactive.png')}
                        fadeDuration={0} style={{ width: 20, height: 22 }}
                    />
                },
            }} />

            <Tab.Screen name="DelegationRule" component={DelegationRuleNavigator} options={{
                headerShown: false, title: 'Delegation Rules',
                tabBarIcon: ({ focused }) => {
                    return focused ? <Image source={require('../assets/images/Delegationactive.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    /> : <Image source={require('../assets/images/Delegation.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                },
            }} />


            <Tab.Screen name="Report" component={ReportStackNavigator} options={{
                headerShown: false, title: 'Report',
                tabBarIcon: ({ focused }) => {
                    return focused ? <Image source={require('../assets/images/Reportactive.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    /> : <Image source={require('../assets/images/Report.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                }
            }} />

            <Tab.Screen name="Search" component={SearchStackNavigator} options={{
                headerShown: false, title: 'Search',
                tabBarIcon: ({ focused }) => {
                    return focused ? <Image source={require('../assets/images/Searchactive.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    /> : <Image source={require('../assets/images/Searchinactive.png')}
                        fadeDuration={0} style={{ width: 20, height: 20 }}
                    />
                }
            }} />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;