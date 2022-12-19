import { View, Text, Pressable, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import NotificationHeader from "../../component/Home/NotificationHeader";
import Actions from "../../component/Home/Actions";
import { homeScreenStyle } from '../../styles/global';
import { useDispatch, useSelector } from "react-redux";
import { selectReportId, fetchApprovalDetails, selectApprovalDetails } from "../../store/notiications";
import DisplayHelper from '../../helpers/display-helper';

import { useEffect } from "react";

const NotificationDetailsScreen = ({ route, navigation }) => {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const LOOKUP_CODE = route.params.LOOKUP_CODE.toUpperCase();
    // const NOTIFICATION_ID = route.params.NOTIFICATION_ID;
    const NOTIFICATION_ID = "69989414";
    const SENDER = route.params.SENDER;
    const SUBJECT = route.params.SUBJECT;
    const FYI_FLAG = route.params.FYI_FLAG;

    
    const ReportId = useSelector((state) => selectReportId(state, LOOKUP_CODE));
    const approvalDetails = useSelector((state) => selectApprovalDetails(state, NOTIFICATION_ID));

    let DOCUMENT_ID = '';
    if(LOOKUP_CODE === 'CMAPPR' ) {
        DOCUMENT_ID = NOTIFICATION_ID;
    } else if(approvalDetails !== null && typeof approvalDetails.DOCUMENT_ID === 'undefined') { 
        DOCUMENT_ID = approvalDetails.INVOICE_ID;
    }
    else if (approvalDetails !== null)  {
        DOCUMENT_ID = approvalDetails.DOCUMENT_ID
    } 
    
    const header = (LOOKUP_CODE === 'APINVAPR' && approvalDetails !== null) ? approvalDetails.INVOICE_NUMBER : SENDER;
    const subHeader = (LOOKUP_CODE === 'CMAPPR') ? NOTIFICATION_ID : '';

    const NOTIFICATION_STATUS = (FYI_FLAG === "Y") ? "CLOSED" : "OPEN";
    const actionHistoryState = { SUBJECT,SENDER, LOOKUP_CODE, NOTIFICATION_ID, DOCUMENT_ID};
    const justificationState = { SUBJECT,SENDER, DOCUMENT_ID};
    const lineState = { SUBJECT,SENDER, LOOKUP_CODE, NOTIFICATION_ID, NOTIFICATION_STATUS, header};
    
    
    

    

    useEffect(() => {
        if (ReportId !== null && approvalDetails === null) {
            const requestInput = {NOTIFICATION_ID: NOTIFICATION_ID, APPROVAL_TYPE_LOOKUP_CODE: LOOKUP_CODE,NOTIFICATION_STATUS, NTID: loggedInNTID}
            dispatch(fetchApprovalDetails(requestInput));
        }
    }, [LOOKUP_CODE, NOTIFICATION_ID, ReportId, loggedInNTID, NOTIFICATION_STATUS, approvalDetails, dispatch]);

    return <View style={[homeScreenStyle.notificationDetails.card, homeScreenStyle.notificationDetails.shadowProp, {flex: 1}]}>
        <NotificationHeader header={header} subHeader={subHeader} SUBJECT={SUBJECT}  ></NotificationHeader>

        <View style={{ paddingTop: 5, borderBottomWidth: 1, borderColor: '#dde3e6' }}>
            {approvalDetails !== null && <>
                {LOOKUP_CODE === 'APINVAPR' && DisplayHelper.isValid(approvalDetails.INVOICE_SOURCE) && <>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>Invoice Source</Text>
                    <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>{approvalDetails.INVOICE_SOURCE}</Text>
                </>}

                {LOOKUP_CODE === 'APINVAPR' && DisplayHelper.isValid(approvalDetails.AMOUNT) && <>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>Amount</Text>
                    <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>{DisplayHelper.amountFormat(approvalDetails.AMOUNT)}</Text>
                </>}

                {LOOKUP_CODE === 'APINVAPR' && DisplayHelper.isValid(approvalDetails.SUPPLIER) && <>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>Supplier</Text>
                    <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>{DisplayHelper.amountFormat(approvalDetails.SUPPLIER)}</Text>
                </>}

                {LOOKUP_CODE === 'APINVAPR' && DisplayHelper.isValid(approvalDetails.INVOICE_DATE) && <>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>Invoice Date</Text>
                    <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>{DisplayHelper.amountFormat(approvalDetails.INVOICE_DATE)}</Text>
                </>}

                {LOOKUP_CODE !== 'APINVAPR' && DisplayHelper.isValid(approvalDetails.HEADER_DESCRIPTION) && <>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>Description</Text>
                    <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>{DisplayHelper.amountFormat(approvalDetails.HEADER_DESCRIPTION)}</Text>
                </>}


                {LOOKUP_CODE !== 'APINVAPR' && LOOKUP_CODE !== 'CMAPPR' && DisplayHelper.isValid(approvalDetails.JUSTIFICATION) && <>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>Justification</Text>
                    <p>{approvalDetails.JUSTIFICATION}</p>
                </>}

                {DisplayHelper.isValid(approvalDetails.EXCESS_MSG) && <>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>Information</Text>
                    <p>{approvalDetails.EXCESS_MSG}</p>
                </>}
            </>}
        </View>

        <Pressable onPress={() => navigate.navigate("Lines", lineState)}>
            <View style={homeScreenStyle.notificationDetails.actionLink}>
                <Text style={homeScreenStyle.notificationDetails.actionLinkText}>Lines</Text>
                <AntDesign style={homeScreenStyle.notificationDetails.arrowIcon} name="right" size={15} color="#2b9cd8" />
            </View>
        </Pressable>

        <Pressable onPress={() => navigate.navigate("ActionHistory")}>
            <View style={homeScreenStyle.notificationDetails.actionLink}>
                <Text style={homeScreenStyle.notificationDetails.actionLinkText}>Action History</Text>
                <AntDesign style={homeScreenStyle.notificationDetails.arrowIcon} name="right" size={15} color="#2b9cd8" />
            </View>
        </Pressable>

        <Pressable onPress={() => navigate.navigate("Attachment")}>
            <View style={homeScreenStyle.notificationDetails.actionLink}>
                <Text style={homeScreenStyle.notificationDetails.actionLinkText}>Attachments</Text>
                <AntDesign style={homeScreenStyle.notificationDetails.arrowIcon} name="right" size={15} color="#2b9cd8" />
            </View>
        </Pressable>

        <Actions></Actions>
    </View>
}


export default NotificationDetailsScreen;