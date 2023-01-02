import { Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReassingBox = () => {
    const navigate = useNavigation();
    
    const navigateScreen = () => {
        //console.log('details qw')
        navigate.navigate('SearchUserRoot', { screen: 'SearchUserNavigator' })
    }
    
    return <>
        <TextInput placeholder='All Employees and Users' style={[styles.textInput, { width: '90%', borderRightWidth: 0, }]} />
        <Pressable onPress={() => navigateScreen()} style={[styles.textInputIcon]}><Text >...</Text></Pressable>
    </>
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        margin: 0,
        height: 40
    },
    textInputIcon: {
        textAlign: 'center',
        paddingTop: 5,
        paddingLeft: 10,
        width: '10%',
        backgroundColor: '#f2f4f5',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        padding: 0,
        margin: 0,
        height: 40,
        color: '#2b9cd8'
    }
   


});

export default ReassingBox;