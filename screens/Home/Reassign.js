import { Text, View, TextInput, Pressable } from "react-native";
import { homeScreenStyle } from "../../styles/global";
import RadioForm from 'react-native-simple-radio-button';
import ReassingBox from "../../component/UI/Reassign/ReassingBox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionDataActions } from "../../store/session-data";
const Reassign = ({ route, navigation }) => {
    const dispatachCall = useDispatch();
    const [comments, onChangeText] = useState("");
    const [transferType, setTransferType] = useState(0);
    const { lookupCode, notificationId, documentNumber } = (route.params !== null) ? route.params : {};
    const menuName = (documentNumber !== null) ? `Reassign ${documentNumber}` : `Reassign ${notificationId}`;
    const NTID = useSelector((state) => state.auth.loggedInNTID);
    const selectedSearchUser = useSelector((state) => state.sessionData.selectedSearchUser);


    const radioProps = [{ label: 'Delegate', value: 0 }];
    if (lookupCode === 'APINVAPR') {
        radioProps.push({ label: 'Transfer', value: 1 })
    }

    const submitData = (postObj) => {
        /**const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApprovalAction/CIFANotificationApprovalActionRest/PerformApprovalAction`;
        axios.post(urlToCall, postObj).then((apiResponse) => {
            if (apiResponse.STATUS.toLowerCase() === 'success') {
                dispatchCall(toastMessageActions.updateState({messageType: 'success', messageText: apiResponse.STATUS_MESSAGE}));
                navigate(-2);
            }
        }).catch(error => console.log(error));**/
    }

    const submitButtonHanler = () => {
        if (selectedSearchUser === null) {
            console.error('Please enter reassign user')
            // dispatchCall(toastMessageActions.updateState({ messageType: 'error', messageText: 'Please enter username' }));
            return false;
        }

        if (comments === null) {
            // dispatchCall(toastMessageActions.updateState({ messageType: 'error', messageText: 'Please enter comment' }));
            console.error('Please enter comment')
            return false;
        }

        const data = {
            NTID,
            REASSIGN_NTID: (selectedSearchUser !== null) ? selectedSearchUser.NTID.toUpperCase() : '',
            ACTION: (transferType === 0) ? 'DELEGATE' : 'TRANSFER',
            APPROVAL_TYPE_LOOKUP_CODE: lookupCode,
            ApprovalActionInput: [{ NOTIFICATION_ID: notificationId, COMMENTS: comments }]
        }
        console.log(data);
        submitData(data);
    }


    useEffect(() => {
        dispatachCall(sessionDataActions.clearSelectedUser());
        navigation.setOptions({ title: menuName });
    }, [menuName]);

    return <View style={{ padding: 10 }}>
        <View style={{ margin: 10 }}>
            <Text style={homeScreenStyle.reassign.label}>Reassign To:</Text>
            <View style={{ flexDirection: "row" }}>
                <ReassingBox screenName={'Reassign'}></ReassingBox>
            </View>
        </View>

        <View style={{ margin: 10 }}>
            <Text style={homeScreenStyle.reassign.label}>Comments:</Text>
            <TextInput multiline={true} onChangeText={onChangeText}
                numberOfLines={Platform.OS === 'ios' ? null : 5}
                minHeight={(Platform.OS === 'ios' && 5) ? (20 * 5) : null}
                style={homeScreenStyle.reassign.textArea} />
        </View>

        <View style={{ margin: 10 }}>
            <RadioForm buttonSize={10} buttonOuterSize={20}
                radio_props={radioProps} initial={0} onPress={(value) => { setTransferType(value) }} />
        </View>

        <View style={{ margin: 10, alignItems: 'center' }}>
            <Pressable onPress={submitButtonHanler} style={homeScreenStyle.reassign.buttonContainer}>
                <Text style={homeScreenStyle.reassign.buttonStlye}>Submit</Text>
            </Pressable>
        </View>
    </View>
}
export default Reassign;