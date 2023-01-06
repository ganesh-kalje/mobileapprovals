import { Text, View, TextInput, Pressable } from "react-native";
import { homeScreenStyle } from "../../styles/global";
import ReassingBox from "../../component/UI/Reassign/ReassingBox";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionDataActions } from "../../store/session-data";

/**const initialRequest = {
    formObj: {
        userName: { isValid: false, isTouch: false, value: null },
        comment: { isValid: false, isTouch: false, value: '' }
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FORM":
            console.log('here ', action.payload.value)
            state.formObj[action.payload.formField].value = action.payload.value;
            state.formObj[action.payload.formField].isTouch = true;
            const formObj = { ...state.formObj };
            return { ...state, formObj: formObj };
        default:
            return state;
    }
};**/

const RequestInfo = ({ route, navigation }) => {
    const { lookupCode, notificationId, documentNumber } = (route.params !== null) ? route.params : {};
    const menuName = (documentNumber !== null) ? `Request Info ${documentNumber}` : `Request Info ${notificationId}`;
    

    const dispatachCall = useDispatch();
    const selectedSearchUser = useSelector((state) => state.sessionData.selectedSearchUser);
    const [comments, onChangeText] = useState("");
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    

    const submitData = (postObj) => {
        /**const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApprovalAction/CIFANotificationApprovalActionRest/PerformApprovalAction`;
        axios.post(urlToCall, postObj).then((apiResponse) => {
            if (apiResponse.STATUS.toLowerCase() === 'success') {
                dispatchCall(toastMessageActions.updateState({messageType: 'success', messageText: apiResponse.STATUS_MESSAGE}));
                navigate(-1);
            }
        }).catch(error => console.log(error));**/
    }

    const submitButtonHanler = () => {
        if (selectedSearchUser === null) {
            // dispatchCall(toastMessageActions.updateState({messageType: 'error', messageText: 'Please enter username'}));
            console.error('Please enter reassign user')
            return false;
        }
        if (comments === '') {
            // dispatchCall(toastMessageActions.updateState({messageType: 'error', messageText: 'Please enter comment'}));
            console.error('Please enter comment')
            return false;
        }

        const data = {
            NTID: loggedInNTID,
            REASSIGN_NTID: (selectedSearchUser !== null) ? selectedSearchUser.NTID.toUpperCase() : '',
            ACTION: "REQUEST_INFO",
            APPROVAL_TYPE_LOOKUP_CODE: lookupCode,
            ApprovalActionInput: [{
                NOTIFICATION_ID: notificationId,
                COMMENTS: comments
            }]
        }
        // submitData(data);
        console.log(data);
    }

    useEffect(() => {
        dispatachCall(sessionDataActions.clearSelectedUser());
        navigation.setOptions({title: menuName});
    }, [dispatachCall, menuName]);

    return <View style={{ padding: 10 }}>
        <View style={{ margin: 10 }}>
            <Text style={homeScreenStyle.reassign.label}>Reassign Information Form:</Text>
            <View style={{ flexDirection: "row" }}>
                <ReassingBox screenName={'RequestInfo'}></ReassingBox>
            </View>
        </View>

        <View style={{ margin: 10 }}>
            <Text style={homeScreenStyle.reassign.label}>Comments:</Text>
            <TextInput multiline={true} onChangeText={onChangeText}
                numberOfLines={Platform.OS === 'ios' ? null : 5}
                minHeight={(Platform.OS === 'ios' && 5) ? (20 * 5) : null}
                style={homeScreenStyle.reassign.textArea} />
        </View>



        <View style={{ margin: 10, alignItems: 'center' }}>
            <Pressable onPress={submitButtonHanler} style={homeScreenStyle.reassign.buttonContainer}>
                <Text style={homeScreenStyle.reassign.buttonStlye}>Submit</Text>
            </Pressable>
        </View>
    </View>
}
export default RequestInfo;