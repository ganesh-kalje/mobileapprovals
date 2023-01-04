import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import SearchUserScreen from '../component/UI/Reassign/SearchUserScreen';

const Stack = createNativeStackNavigator();
function SearchUserRoot({routes, navigation}) {
    const navigate = useNavigation();
    return (
      <Stack.Navigator>
            <Stack.Screen initialParams={{ itemId: 42 }} name="SearchUserNavigator" component={SearchUserScreen} options={
                { 
                  headerStyle: { backgroundColor: '#00619a' },
                  headerTintColor: 'white',
                  drawerActiveTintColor: '#fff',
                  drawerInactiveTintColor: '#fff',
                  headerShown: true, 
                  title: 'Search and Select User', 
                }}/>
      </Stack.Navigator>
    );
} 

export default SearchUserRoot;