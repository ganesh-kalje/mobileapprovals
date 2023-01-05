import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from 'react-native';
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import StorageHelper from '../../../helpers/storage-helper';
import { useDispatch } from 'react-redux';
import { sessionDataActions } from '../../../store/session-data';

const initialRequest = { searchKey: '', PAGE_NUMBER: 1, selectedUser: null, userResults: [], comments: '' };
const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...initialRequest, searchKey: action.searchKey };
        case "NEXT":
            state.PAGE_NUMBER++;
            return { ...state, PAGE_NUMBER: state.PAGE_NUMBER }
        case "PRE":
            state.PAGE_NUMBER--;
            return { ...state, PAGE_NUMBER: state.PAGE_NUMBER }
        case "USERS_RESULT":
            return { ...state, userResults: action.data }
        case "SELECT_USER":
            return { ...state, searchKey: '', selectedUser: action.selectedUser };
        default:
            return state;
    }
};

const SearchUserScreen = ({ route, navigation }) => {
    const [text, onChangeText] = React.useState("");
    const [resultSelector, dispatch] = useReducer(reducer, initialRequest);
    const dispatchCall = useDispatch();
    const { searchKey, PAGE_NUMBER, selectedUser, userResults } = resultSelector;
    const nav = useNavigation();
    
    const searchButtonHandler = () => dispatch({ type: "SEARCH", searchKey: text })
    const selectRecord = (selectedRecord) => dispatch({ type: "SELECT_USER", selectedUser: selectedRecord });

    const callBackSelection = () => {
        if (selectedUser === null) {
            console.error("Please select user.");
            return;
        }
        dispatchCall(sessionDataActions.saveSelectedUser(selectedUser));
        nav.navigate("RequestInfo");
    }

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source()
        if (searchKey && searchKey !== '' && searchKey.length > 2) {
            // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApprovalSearch/CIFANotificationApprovalSearchRest/SearchUser`;
            const urlToCall = 'https://mobile-approval-a77da-default-rtdb.firebaseio.com/SearchUser.json';
            /**const postObj = {USER_NAME : searchKey, PAGE_NUMBER}
            axios.post(urlToCall, postObj, { cancelToken: source.token }).then((apiResponse) => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.SearchUserOutput) {
                    dispatch({ type: "USERS_RESULT", data: apiResponse.SearchUserOutput });
                }
            }).catch(error => console.log(error));**/
            const postObj = { USER_NAME: searchKey, PAGE_NUMBER }
            axios.get(urlToCall, { cancelToken: source.token }).then((apiResponse) => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.SearchUserOutput) {
                    dispatch({ type: "USERS_RESULT", data: apiResponse.SearchUserOutput });
                }
            }).catch(error => console.log(error));
        } else {
            // dispatch({ type: "SEARCH", searchKey: searchKey });
        }

        nav.setOptions({
            headerRight: () => <Pressable onPress={callBackSelection}>
                <Text style={{ color: '#fff', fontWeight: 'bold', paddingTop: 5, fontSize: 15 }}>Done</Text>
            </Pressable>,
        });

        return () => {
            // Anything in here is fired on component unmount.
            source.cancel();
        }

        
    }, [searchKey, PAGE_NUMBER, selectedUser]);

    const renderItem = ({ item }) => (
        <Pressable onPress={() => selectRecord(item)} style={styles.userInfoBox}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '90%' }}>
                    <Text style={{ fontSize: 12, color: '#2a2a2a' }}>{item.NTID}</Text>
                    <Text style={{ fontSize: 14, color: '#0254EB' }}>{item.EMPLOYEE_NAME}</Text>
                    <Text style={{ fontSize: 12, color: '#2b9cd8' }}>{item.EMAIL_ADDRESS}</Text>
                </View>
                {selectedUser !== null && item.NTID === selectedUser.NTID && <View>
                    <MaterialIcons name="check-circle-outline" size={24} color="#2b9cd8" />
                </View>}
            </View>
        </Pressable>
    );

    return <View>
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.label}>Name:</Text>
                <TextInput style={styles.textInput} onChangeText={onChangeText} value={text} />
            </View>

            <View style={{ alignItems: 'center' }}>
                <Pressable onPress={searchButtonHandler} style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Search</Text>
                </Pressable>
            </View>
        </View>

        {userResults.length !== 0 && <SafeAreaView>
            <View >
                <FlatList data={userResults} renderItem={renderItem} keyExtractor={item => item.NTID} />
            </View>
        </SafeAreaView>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textInput: {
        backgroundColor: '#fff',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 0,
        margin: 0,
        height: 40
    },
    textArea: {
        backgroundColor: '#fff',
        textAlignVertical: 'top',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 0,
        margin: 0,
    },
    label: {
        color: '#2a2c2d',
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 5
    },

    buttonContainer: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#2b9cd8',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        width: '40%',
        textAlign: 'center',
    },
    buttonStlye: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    userInfoBox: {
        backgroundColor: '#ebeef0',
        padding: 10,
        marginBottom: 20
    }
});
export default SearchUserScreen;