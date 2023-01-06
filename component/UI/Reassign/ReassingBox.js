import { Text, TextInput, Pressable, StyleSheet, View, Button, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import React, { memo, useCallback, useRef, useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import { sessionDataActions } from '../../../store/session-data';
Feather.loadFont();

// Input search configuration object
const textInputProps = {
    placeholder: 'All Employees and Users',
    autoCorrect: false,
    autoCapitalize: 'none',
    style: {
        backgroundColor: '#fff',
        border: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 0,
        height: 40,
        borderLeftColor: '#2b9cd8',
        borderTopColor: '#2b9cd8',
        borderBottomColor: '#2b9cd8',
        borderRightColor: '#2b9cd8',
        width: '90%'
    }
}

const rightButtonsContainerStyle = {
    right: 2,
    height: 30,
    alignSelf: 'center',
}


const ReassingBox = memo(({ screenName }) => {
    const dispatchCall = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showMoreIcon, setShowMoreIcon] = useState(true);
    const [suggestionsList, setSuggestionsList] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const dropdownController = useRef(null);
    const searchRef = useRef(null);
    const navigate = useNavigation();
    const selectedSearchUser = useSelector((state) => state.sessionData.selectedSearchUser);
    const navigateScreen = () => {
        navigate.navigate('SearchUserRoot', { screen: screenName });
    }

    const getSuggestions = useCallback(async q => {
        setShowMoreIcon(q.length === 0 ? true : false);
        const filterToken = q.toLowerCase()
        if (typeof q !== 'string') {
            setSuggestionsList(null)
            return
        }
        setLoading(true)
        const response = await fetch('https://mobile-approval-a77da-default-rtdb.firebaseio.com/SearchUser.json')
        const items = await response.json();
        const suggestions = items.SearchUserOutput.map(item => ({
            id: item.NTID,
            title: item.EMPLOYEE_NAME,
            EMAIL_ADDRESS: item.EMAIL_ADDRESS,
            EMPLOYEE_NAME: item.EMPLOYEE_NAME,
            NTID: item.NTID
        }))
        setSuggestionsList(suggestions)
        setLoading(false)
    }, [])

    const onClearPress = useCallback(() => {
        setSuggestionsList(null);
    }, []);

    const onSelection = (item) => {
        dispatchCall(sessionDataActions.saveSelectedUser(item));
        item && setSelectedItem(item.id);
    };

    const onOpenSuggestionsList = useCallback(isOpened => { }, []);

    // {(showMoreIcon || suggestionsList === null || suggestionsList.length == 0) && <Pressable onPress={() => navigateScreen()} style={[styles.textInputIcon]}><Text >...</Text></Pressable>}

    return <View>
        <View style={[{flexDirection: 'row'}, Platform.select({ ios: { zIndex: 1 } })]}>
            <AutocompleteDropdown
                ref={searchRef}
                controller={controller => {
                    dropdownController.current = controller
                }}
                // initialValue={'1'}
                direction={Platform.select({ ios: 'down' })} dataSet={suggestionsList}
                onChangeText={getSuggestions}
                onSelectItem={onSelection}
                debounce={600}
                suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                onClear={onClearPress}
                //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
                onOpenSuggestionsList={onOpenSuggestionsList}
                loading={loading}
                useFilter={false} // set false to prevent rerender twice
                textInputProps={textInputProps}
                rightButtonsContainerStyle={rightButtonsContainerStyle}
                inputContainerStyle={{
                    backgroundColor: '#2b9cd8',
                }}
                suggestionsListContainerStyle={{
                    backgroundColor: '#fff',
                }}
                containerStyle={{ flexGrow: 1, flexShrink: 1 }}
                renderItem={(item, text) => <Text style={{ color: 'black', padding: 15 }}>{item.title}</Text>}
                ChevronIconComponent={<Feather name="chevron-down" size={20} color="#fff" />}
                ClearIconComponent={<Feather name="x-circle" size={18} color="#fff" />}
                inputHeight={50} showChevron={false} closeOnBlur={true} clearOnFocus={false} closeOnSubmit={false}
            />
            
        </View>
        
    </View>
})

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
        marginTop: 1.5,
        width: '10%',
        alignItems: 'center',
        height: 40,
        borderStyle: 'solid',
        border: 1,
        borderWidth: 1,
        borderColor: '#2b9cd8',
        

        /**textAlign: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        width: '10%',
        // backgroundColor: '#f2f4f5',
        backgroundColor: '#fff',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        padding: 0,
        margin: 0,
        height: 42,
        color: '#2b9cd8'**/
    }
});

export default ReassingBox;