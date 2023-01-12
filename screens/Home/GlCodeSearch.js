import axios from "axios";
import { useEffect, useReducer } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";


const initialRequest = { GL_CODE_COMBINATION: "", PAGE_NUMBER: 1, glCode: [], selectedGlCode: '' };
const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...initialRequest, GL_CODE_COMBINATION: action.id };
        case "NEXT":
            state.PAGE_NUMBER++;
            return { ...state, PAGE_NUMBER: state.PAGE_NUMBER }
        case "PRE":
            state.PAGE_NUMBER--;
            return { ...state, PAGE_NUMBER: state.PAGE_NUMBER }
        case "GLCODE":
            return { ...state, glCode: action.data }
        case "SELECT_CODE":
            return { ...state, selectedGlCode: action.SELECT_CODE }
        default:
            return state;
    }
};

const GlCodeSearch = ({ route, navigation }) => {
    const dispatchCall = useDispatch();
    const [requestState, dispatch] = useReducer(reducer, initialRequest);
    const GL_CODE_COMBINATION = requestState.GL_CODE_COMBINATION;
    const PAGE_NUMBER = requestState.PAGE_NUMBER;
    const CancelToken = axios.CancelToken;
    const { selectedGlCode } = (route.params !== null) ? route.params : {};
    let postObj = {}
    if (route.params !== null) {
        postObj = {
            INVOICE_ID: (route.params.INVOICE_ID) ? route.params.INVOICE_ID : '',
            INVOICE_DIST_NUM: (route.params.DISTRIBUTION_NUM) ? route.params.DISTRIBUTION_NUM : '',
            EXISTING_CCID: (route.params.DIST_CODE_COMBINATION_ID) ? route.params.DIST_CODE_COMBINATION_ID : '',
            CODE_COMBINATION_ID: '', INVOICE_LINE_NUM: (route.params.INVOICE_LINE_NUM) ? route.params.INVOICE_LINE_NUM : ''
        };
    }

    

    
    
    const onChangeHandler = e => dispatch({ type: "SEARCH", id: e });
    const nextButtonHandler = () =>  dispatch({ type: "NEXT"});
    const preButtonHandler = () => dispatch({ type: "PRE"});

    const selectGLCodeHandle = (selectedGlCode) => {
        dispatch({ type: "SELECT_CODE", SELECT_CODE: selectedGlCode })
    }

    const callBackSelection = () => {
       /** if(requestState.selectedGlCode === '') {
            // dispatchCall(toastMessageActions.updateState({messageType: 'error', messageText: 'Please select a new GL code'}))
            return
        }
        postObj.CODE_COMBINATION_ID = requestState.selectedGlCode;
        const urlToCall = `${api.getAPIEndPoint()}CIFANotificationDetails/CIFANotificationDetailsRest/UpdateAdditionInfo`;
       
        axios.post(urlToCall, postObj).then((apiResponse) => {
            if (apiResponse.STATUS.toLowerCase() === 'success') {
                dispatchCall(toastMessageActions.updateState({messageType: 'success', messageText: apiResponse.STATUS_MESSAGE}))
            }
        }).catch(error => console.log(error)); */
    }

    const renderItem = ({ item, index }) => {
        return <View style={{ backgroundColor: (index % 2 == 0) ? '#e2e7f2' : '#fff' }}>
            <Text style={{ fontSize: 14, paddingVertical: 10, paddingHorizontal: 22, color: '#0254eb' }}>{item.GL_CODE_COMBINATION}</Text>
        </View>
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Pressable onPress={callBackSelection}>
                <Text style={{ color: '#fff', fontWeight: 'bold', paddingTop: 5, fontSize: 15 }}>Done</Text>
            </Pressable>,
        });

        // const source = CancelToken.source()
        if (GL_CODE_COMBINATION !== '') {
            // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApproval/CIFANotificationApprovalRest/GetGlCode`;
            const urlToCall = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetGlCode.json`;
            axios.get(urlToCall).then((apiResponse) => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.GlCodeListOutput) {
                    dispatch({ type: "GLCODE", data: apiResponse.GlCodeListOutput });
                }
            }).catch(error => console.log(error));

            /**axios.post(urlToCall, requestState, { cancelToken: source.token }).then((apiResponse) => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.GlCodeListOutput) {
                    dispatch({ type: "GLCODE", data: apiResponse.GlCodeListOutput });
                }
            }).catch(error => console.log(error));**/
        } else {
            dispatch({ type: "SEARCH", id: selectedGlCode });
        }

        return () => {
            // Anything in here is fired on component unmount.
            // source.cancel();
        }
    }, [GL_CODE_COMBINATION, PAGE_NUMBER, selectedGlCode]);

    return <>
        <View style={{ padding: 5, backgroundColor: '#0272B6'}}>
            <TextInput defaultValue={selectedGlCode} onChangeText={(event) => onChangeHandler(event)} style={{ height: 40, margin: 12, padding: 10, backgroundColor: '#fff', borderRadius: 3, border: 'none'}}  placeholder="Type here to filter" />
        </View>
        <FlatList data={requestState.glCode} renderItem={renderItem} keyExtractor={item => item.CODE_COMBINATION_ID}></FlatList>
        
        {!(requestState.PAGE_NUMBER === 1 && requestState.glCode.length < 20) && <View style={{flexDirection: 'row'}}>
            <Pressable onPress={preButtonHandler} style={{width: '50%', alignItems: 'center', backgroundColor: '#2a2c2d', padding: 10}}>
                <Text style={{color: '#fff'}}>Previous</Text>
            </Pressable>   
            <Pressable onPress={nextButtonHandler} style={{width: '50%', alignItems: 'center',  backgroundColor: '#2b9cd8',  padding: 10}}>
                <Text style={{color: '#fff'}}>Next</Text>
            </Pressable>
        </View>}
    </> 
}



export default GlCodeSearch;