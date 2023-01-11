import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Button, Dimensions, Text, View, Platform, Pressable } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

import Feather from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'
import { stateOfServiceSelector } from '../../store/notiications'
Feather.loadFont()


// Input search configuration object
const textInputProps = {
    placeholder: 'Select State Of Service',
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

export const StateSearchScreen = memo(({ route, navigation }) => {
    const [loading, setLoading] = useState(false)
    const [suggestionsList, setSuggestionsList] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    const dropdownController = useRef(null);
    const stateList = useSelector(stateOfServiceSelector);
    const searchRef = useRef(null);

    const getSuggestions = useCallback(async q => {
        const filterToken = q.toLowerCase()
        if (typeof q !== 'string') {
            setSuggestionsList(null)
            return
        }
        setLoading(true);
        const items = stateList;
        const suggestions = items.filter(item => item.Meaning.toLowerCase().includes(filterToken)).map(item => ({
            id: item.LookupCode,
            title: item.Meaning,
        }))
        setSuggestionsList(suggestions)
        setLoading(false)
    }, [])

    const onClearPress = useCallback(() => {
        setSuggestionsList(null)
    }, [])

    const onOpenSuggestionsList = useCallback(isOpened => { }, []);


    /**const updateState = (postObj) => {
        const urlToCall = `${api.getAPIEndPoint()}CIFANotificationDetails/CIFANotificationDetailsRest/UpdateAPInvoice_StateOfServices`;
        axios.post(urlToCall, postObj).then((apiResponse) => {
            if (apiResponse.STATUS.toLowerCase() === 'success') {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                dispatchCall(toastMessageActions.updateState({messageType: 'success', messageText: apiResponse.STATUS_MESSAGE}))
                navigate(-1);
                return
            }
        }).catch(error => console.log(error));
    }**/

    const stateDoneCallBackHandler = () => {
        console.log('selected item ', selectedItem);
        if (selectedItem === '' || selectedItem === null) {
            // dispatchCall(toastMessageActions.updateState({ messageType: 'error', messageText: 'Please select one state.' }))
            console.error("Please select state.")
            return
        }
        
        /**const postObj = {
            P_INVOICE_ID: location.state.P_INVOICE_ID, P_INVOICE_DIST_NUM: location.state.P_INVOICE_DIST_NUM,
            P_STATE_SERV_CODE_OLD: location.state.P_STATE_SERV_CODE_OLD, P_STATE_SERV_CODE_NEW: selectedState,
            P_INVOICE_LINE_NUM: location.state.P_INVOICE_LINE_NUM
        }**/
        // updateState(postObj);
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Pressable onPress={stateDoneCallBackHandler}>
                <Text style={{ color: '#fff', fontWeight: 'bold', paddingTop: 5, fontSize: 15 }}>Done</Text>
            </Pressable>,
        });
    }, [selectedItem]);

    return (
        <>
            <View style={[{ flexDirection: 'row', padding: 10 }, Platform.select({ ios: { zIndex: 1 } })]}>
                <AutocompleteDropdown
                    ref={searchRef}
                    controller={controller => {
                        dropdownController.current = controller
                    }}
                    // initialValue={'1'}
                    direction={Platform.select({ ios: 'down' })}
                    dataSet={suggestionsList}
                    onChangeText={getSuggestions}
                    onSelectItem={item => {
                        item && setSelectedItem(item.title)
                    }}
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
                    inputHeight={50}
                    showChevron={false}
                    closeOnBlur={false}
                //  showClear={false}
                />
            </View>
        </>
    )
})
export default StateSearchScreen;