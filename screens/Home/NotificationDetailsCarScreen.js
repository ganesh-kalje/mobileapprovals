import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import NotificationHeader from "../../component/Home/NotificationHeader";
import { homeScreenStyle } from "../../styles/global";
import axios from 'axios';
import LinePropertiesCar from "./cars/LinePropertiesCar";
import { AntDesign } from '@expo/vector-icons'; 
import Actions from "../../component/Home/Actions";

const NotificationDetailsCarScreen = ({ route, navigation }) => {
    const navigate = useNavigation();
    const [approvalDetails, setApprovalDetails] = useState({});
    // const NOTIFICATION_ID = route.params.NOTIFICATION_ID;
    const NOTIFICATION_ID = "69989414";
    const SENDER = route.params.SENDER;
    const SUBJECT = route.params.SUBJECT;
    const FYI_FLAG = route.params.FYI_FLAG;
    const notifications = useSelector((state) => state.notification);
    // const LOOKUP_CODE = route.params.LOOKUP_CODE.toUpperCase();
    const LOOKUP_CODE = 'APEXP'
    const header = (typeof SENDER === 'undefined' || SENDER === null) ? NOTIFICATION_ID : SENDER;
    const selectedNotification = notifications.notifications.find((notification) => notification.APPROVAL_TYPE_LOOKUP_CODE === LOOKUP_CODE);
    const ReportId = (selectedNotification) ? selectedNotification.ReportID : null;
    const linesState = { SENDER, SUBJECT, LOOKUP_CODE, linesData: ('TRANSACTION_LINE' in approvalDetails) ? approvalDetails.TRANSACTION_LINE : [] }
   
    React.useEffect(() => {
        if (ReportId !== null) {
            // const urlToCall = `${api.DQ}dynamicreport/report/GetDynamicReport`;
            const dataInput = {
                ReportId, ParametersInput: [{ Name: 'NOTIFICATION_ID', Value: NOTIFICATION_ID }],
                approvalTypeLookUpCode: LOOKUP_CODE.toUpperCase()
            }
            const urlToCall = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetDynamicReportCar.json`;
            
            axios.get(urlToCall).then(apiResponse => {
               if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.ROW && apiResponse.ROW[0]) {
                    const transactionHeader = (apiResponse.ROW[0].TRANSACTION_DATA && apiResponse.ROW[0].TRANSACTION_DATA[LOOKUP_CODE]);
                    const details = (transactionHeader.TRANSACTION_HEADER) ? transactionHeader.TRANSACTION_HEADER : [];
                    setApprovalDetails(details);
                }
            }).catch(error => console.log(error));
            
            /**axios.post(urlToCall, dataInput).then(apiResponse => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.ROW && apiResponse.ROW[0]) {
                    const transactionHeader = (apiResponse.ROW[0].TRANSACTION_DATA && apiResponse.ROW[0].TRANSACTION_DATA[LOOKUP_CODE]);
                    const details = (transactionHeader.TRANSACTION_HEADER) ? transactionHeader.TRANSACTION_HEADER : [];
                    setApprovalDetails(details);
                }
            }).catch(error => console.log(error));**/
        }
    }, [LOOKUP_CODE, NOTIFICATION_ID, ReportId])
    
    
    return <>
    
        <View style={[homeScreenStyle.notificationDetails.card, homeScreenStyle.notificationDetails.shadowProp, { flex: 1 }]}>
            <NotificationHeader header={header} subHeader={''} SUBJECT={SUBJECT}  ></NotificationHeader>
            
                <LinePropertiesCar LOOKUP_CODE={LOOKUP_CODE} approvalDetails={approvalDetails} NOTIFICATION_ID={NOTIFICATION_ID}></LinePropertiesCar>
            
            
            <Pressable onPress={() => navigate.navigate("LinesCar", linesState)}>
                <View style={homeScreenStyle.notificationDetails.actionLink}>
                    <Text style={homeScreenStyle.notificationDetails.actionLinkText}>Lines</Text>
                    <AntDesign style={homeScreenStyle.notificationDetails.arrowIcon} name="right" size={15} color="#2b9cd8" />
                </View>
            </Pressable>
            <Pressable onPress={() => navigate.navigate("ActionHistory", actionHistoryState)}>
                <View style={homeScreenStyle.notificationDetails.actionLink}>
                    <Text style={homeScreenStyle.notificationDetails.actionLinkText}>Action History</Text>
                    <AntDesign style={homeScreenStyle.notificationDetails.arrowIcon} name="right" size={15} color="#2b9cd8" />
                </View>
            </Pressable>
            
            <Pressable onPress={() => navigate.navigate("Attachment", { NOTIFICATION_ID: NOTIFICATION_ID, LOOKUP_CODE })}>
                <View style={homeScreenStyle.notificationDetails.actionLink}>
                    <Text style={homeScreenStyle.notificationDetails.actionLinkText}>Attachments</Text>
                    <AntDesign style={homeScreenStyle.notificationDetails.arrowIcon} name="right" size={15} color="#2b9cd8" />
                </View>
            </Pressable>

            
            <View style={[homeScreenStyle.notificationDetails.actionLink, {borderWidth: 1, borderColor: 'red'}]}>
                <Actions LOOKUP_CODE={LOOKUP_CODE} NOTIFICATION_ID={NOTIFICATION_ID} approvalDetails={approvalDetails}></Actions>
            </View>
            
            
            
            
        </View>
        
    </>
}
export default NotificationDetailsCarScreen;