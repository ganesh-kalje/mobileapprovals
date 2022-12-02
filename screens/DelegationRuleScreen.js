import { Text, View, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ViewRuleScreen from '../component/delegation-rules/ViewRuleScreen';
import CreateRuleScreen from '../component/delegation-rules/CreateRuleScreen';

const Tab = createMaterialTopTabNavigator();


const DelegationRuleScreen = ({ navigation }) => {
    return (
        <NavigationContainer independent={true} >
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#00619A',
                    tabBarInactiveTintColor: 'gray',
                    pressColor: 'transparent',
                    pressOpacity: 1,
                    labelStyle: {
                        fontSize: 16,
                        textTransform: 'none',
                    },
                    style: {
                        backgroundColor: 'white',
                        height: 50,
                        elevation: 0,
                    },
                    indicatorStyle: {
                        backgroundColor: '#00619A',
                        height: 4,
                    },
                }}
      
                >
                <Tab.Screen name="ViewRule" component={ViewRuleScreen} options={{ tabBarLabel: 'View Rule'}}   />
                <Tab.Screen name="CreateRule" component={CreateRuleScreen} options={{title: 'Create Rule'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default DelegationRuleScreen;