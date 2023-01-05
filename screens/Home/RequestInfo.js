import { Text, View, TextInput, Pressable } from "react-native";
import { homeScreenStyle } from "../../styles/global";

import ReassingBox from "../../component/UI/Reassign/ReassingBox";
import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageHelper from "../../helpers/storage-helper";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { sessionDataActions } from "../../store/session-data";

const initialRequest = {
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
};

const RequestInfo = ({ route, navigation }) => {
    const selectedSearchUser = useSelector((state) => state.sessionData.selectedSearchUser);
    const [comments, onChangeText] = useState("");

    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const [resultSelector, dispatch] = useReducer(reducer, initialRequest);
    let selectedUser = null;

    const dispatachCall = useDispatch();
    console.log('selected user ', selectedSearchUser);

    const submitButtonHanler = () => {
        
        /**if (resultSelector.formObj.userName.value === null) {
            dispatchCall(toastMessageActions.updateState({messageType: 'error', messageText: 'Please enter username'}));
            return false;
        }
        if (resultSelector.formObj.comment.value === '') {
            dispatchCall(toastMessageActions.updateState({messageType: 'error', messageText: 'Please enter comment'}));
            return false;
        }

        const data = {
            NTID: loggedInNTID,
            REASSIGN_NTID: resultSelector.formObj.userName.value.NTID.toUpperCase(),
            ACTION: "REQUEST_INFO",
            APPROVAL_TYPE_LOOKUP_CODE: lookupCode,
            ApprovalActionInput: [{
                NOTIFICATION_ID: notificationId,
                COMMENTS: resultSelector.formObj.comment.value
            }]
        }
        submitData(data);**/
    }

    

    useEffect(() => {
        dispatachCall(sessionDataActions.clearSelectedUser());
    }, [dispatachCall]);
    
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