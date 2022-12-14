import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewRuleScreen from '../component/delegation-rules/ViewRuleScreen';
import CreateRuleScreen from '../component/delegation-rules/CreateRuleScreen';
import SearchUserScreen from "../component/UI/Reassign/SearchUserScreen";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRules,fetchItemsType } from '../store/delegation-rules';
import SearchUserRoot from '../navigation/SearchUserNavigator';


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
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
}

function Root() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="ViewRule" component={ViewRuleScreen} options={{ tabBarLabel: 'View Rule' }} />
            <Tab.Screen name="CreateRule" component={CreateRuleScreen} options={{ title: 'Create Rule' }} />
        </Tab.Navigator>
    );
}


const DelegationRuleScreen = ({ navigation }) => {
    const dispath = useDispatch();
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    
    useEffect(() => {
        dispath(fetchItemsType(loggedInNTID));
        dispath(fetchRules(loggedInNTID));
    }, [loggedInNTID]);

    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator>
                <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
                <Stack.Screen name="SearchUserRoot" component={SearchUserRoot} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default DelegationRuleScreen;