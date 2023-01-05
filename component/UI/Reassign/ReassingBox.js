import { Text, TextInput, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AutocompleteInput  from 'react-native-autocomplete-input';

const ReassingBox = ({ screenName }) => {
    const navigate = useNavigation();
    const selectedSearchUser = useSelector((state) => state.sessionData.selectedSearchUser);
    const navigateScreen = () => {
        navigate.navigate('SearchUserRoot', { screen: screenName });
    }

    const ITEMS = [
        'A New Hope',
        'The Empire Strikes Back',
        'Return of the Jedi',
        'The Phantom Menace',
        'Attack of the Clones',
        'Revenge of the Sith',
      ];

    return <>
        <AutocompleteInput 
            data={ITEMS}
            renderResultList={({ data, style }) => (
                <View style={style}>
                    {data.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Text key={index}>{item}</Text>
                    ))}
                </View>
            )}
        />
        <TextInput placeholder='All Employees and Users' value={(selectedSearchUser !== null ? selectedSearchUser.EMPLOYEE_NAME : '')} 
            style={[styles.textInput, { width: '90%', borderRightWidth: 0, }]}
        />
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