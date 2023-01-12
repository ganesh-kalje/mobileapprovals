import axios from "axios";
import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import NotificationHeader from "../../component/Home/NotificationHeader";
import DisplayHelper from "../../helpers/display-helper";
import { homeScreenStyle } from '../../styles/global';

const ActionHistoryScreen = ({ route, navigation }) => {
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const { SUBJECT, SENDER, LOOKUP_CODE, NOTIFICATION_ID, DOCUMENT_ID } = (route.params !== null) ? route.params : {};
    const subHeader = (LOOKUP_CODE === 'CMAPPR') ? NOTIFICATION_ID : '';
    const [actionHistoryList, setActionHistoryList] = useState([]);



    React.useEffect(() => {
        if (typeof LOOKUP_CODE !== 'undefined' && typeof NOTIFICATION_ID !== 'undefined') {
            // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApprovalAction/CIFANotificationApprovalActionRest/GetActionHistory`;
            const urlToCall = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetActionHistory.json`;
            const requestInput = { APPROVAL_TYPE_LOOKUP_CODE: LOOKUP_CODE, DOCUMENT_ID, NTID: loggedInNTID, "NOTIFICATION_STATUS": "OPEN" };
            axios.get(urlToCall).then((apiResponse) => {
                console.log(apiResponse.ActionHistoryOutput);
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.ActionHistoryOutput) {
                    setActionHistoryList(apiResponse.ActionHistoryOutput);
                }
            }).catch(error => console.log(error));
            /**const requestInput = { APPROVAL_TYPE_LOOKUP_CODE: LOOKUP_CODE, DOCUMENT_ID, NTID: loggedInNTID, "NOTIFICATION_STATUS": "OPEN" };
            axios.post(urlToCall, requestInput).then((apiResponse) => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.ActionHistoryOutput) {
                    setActionHistoryList(apiResponse.ActionHistoryOutput);
                }
            }).catch(error => console.log(error));**/
        }
    }, [LOOKUP_CODE, NOTIFICATION_ID, DOCUMENT_ID, loggedInNTID]);

    const renderItem = ({ item }) => {
        return <View style={{ backgroundColor: '#fff' }}>
            <View style={[homeScreenStyle.actionHistoryScreen.boxItem]}>

                {DisplayHelper.isValid(item.SEQUENCE_NUM) && <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                    <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>#</Text>
                    <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>{item.SEQUENCE_NUM}</Text>
                </View>}

                {DisplayHelper.isValid(item.ACTION) && <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                    <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action</Text>
                    <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>{item.ACTION}</Text>
                </View>}

                {DisplayHelper.isValid(item.ACTION_TAKEN_BY) && <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                    <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action Taken By</Text>
                    <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>{item.ACTION_TAKEN_BY}</Text>
                </View>}

                {DisplayHelper.isValid(item.ACTION_DATE) && <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                    <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action Date</Text>
                    <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>{item.ACTION_DATE}</Text>
                </View>}

                {DisplayHelper.isValid(item.FROM_USER) && <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                    <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>From User</Text>
                    <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>{item.FROM_USER}</Text>
                </View>}

                {DisplayHelper.isValid(item.SUBJECT) && <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                    <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Subject</Text>
                    <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>{item.SUBJECT}</Text>
                </View>}

                {DisplayHelper.isValid(item.COMMENTS) && <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                    <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Comments</Text>
                    <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>{item.COMMENTS}</Text>
                </View>}
            </View>
        </View>
    }


    return (<SafeAreaView style={[homeScreenStyle.actionHistoryScreen.card, homeScreenStyle.actionHistoryScreen.shadowProp, { flex: 1 }]}>
        <NotificationHeader header={SENDER} subHeader={subHeader} SUBJECT={SUBJECT}  ></NotificationHeader>
        <FlatList data={actionHistoryList} renderItem={renderItem} keyExtractor={item => item.SEQUENCE_NUM} />
    </SafeAreaView>)
}

export default ActionHistoryScreen;