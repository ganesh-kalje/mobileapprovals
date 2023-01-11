import { Pressable, Text, View, FlatList, SafeAreaView } from "react-native"
import { homeScreenStyle } from "../../styles/global";
import { AntDesign } from '@expo/vector-icons';
import DisplayHelper from "../../helpers/display-helper";
import { useState } from "react";
import axios from 'axios';
import AdditionalInfo from "./AdditionalInfo";

const ReqListRequest = ({ lineDetailObj, infoObj }) => {
    
    const fyiflag = ''; // FYI_FLAG logic is pending
    const isGLCodeDisable = (infoObj.APPROVAL_TYPE_LOOKUP_CODE !== 'APINVAPR' || (fyiflag !== 'N')) ? true : false;
    const [additionalInfo, setAdditionalInfo] = useState([]);
    const [contentShowHide, setContentShowHide] = useState(false);

    const getAdditionalInfo = (requestInput) => {
        // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationDetails/CIFANotificationDetailsRest/GetLineAdditionalInfo`;
        const urlToCall = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetLineAdditionalInfo.json`;
        const successResponse = (apiResponse) => {
            setContentShowHide(true);
            if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.LineAdditionalInfoOutput) {
                additionalInfo.push(apiResponse.LineAdditionalInfoOutput);
                setAdditionalInfo(apiResponse.LineAdditionalInfoOutput);
            }
        };
        axios.get(urlToCall).then(successResponse).catch(error => console.log(error));

        /**axios.post(urlToCall, requestInput).then((apiResponse) => {
            setShowHidePanel(true);
            if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.LineAdditionalInfoOutput) {
                additionalInfo.push(apiResponse.LineAdditionalInfoOutput);
                setAdditionalInfo([...apiResponse.LineAdditionalInfoOutput]);
            }
        }).catch(error => console.log(error));**/
    }

    const contentShowHideHandler = () => {
        if(additionalInfo.length === 0) {
            const requestInput = {NOTIFICATION_ID: infoObj.NOTIFICATION_ID , INVOICE_ID: lineDetailObj.INVOICE_ID,
                APPROVAL_TYPE_LOOKUP_CODE: infoObj.APPROVAL_TYPE_LOOKUP_CODE, NOTIFICATION_STATUS:"OPEN",
                INVOICE_LINE_NUM: lineDetailObj.INVOICE_LINE_NUM, NTID: infoObj.NTID
            }
            getAdditionalInfo(requestInput);
        } else {
            setContentShowHide(!contentShowHide);
        }
    }

    

    return (<>
        <View style={[homeScreenStyle.lineScreen.boxItem, {paddingBottom: 0}]}>
            {DisplayHelper.isValid(lineDetailObj.LINE_NUMBER) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Line #</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.LINE_NUMBER}</Text>
            </View>}

            {DisplayHelper.isValid(lineDetailObj.AMOUNT) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Amount</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{DisplayHelper.amountFormat(lineDetailObj.AMOUNT)}</Text>
            </View>}

            {DisplayHelper.isValid(lineDetailObj.CATEGORY) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Category</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.CATEGORY}</Text>
            </View>}

            {DisplayHelper.isValid(lineDetailObj.SHIP_TO_LOCATION) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Ship to Location</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.SHIP_TO_LOCATION}</Text>
            </View>}

            {DisplayHelper.isValid(lineDetailObj.DESCRIPTION) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Description</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.DESCRIPTION}</Text>
            </View>}

            {DisplayHelper.isValid(lineDetailObj.EXCESS_FLAG) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Excess Available</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.EXCESS_FLAG}</Text>
            </View>}

            {DisplayHelper.isValid(lineDetailObj.EXCESS_REASON) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Reason</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.EXCESS_REASON}</Text>
            </View>}

            

            {contentShowHide && <>
                {DisplayHelper.isValid(lineDetailObj.ITEM_NUMBER) && <div className="action-item">
                    <label>Item #</label>
                    <div className="value">{lineDetailObj.ITEM_NUMBER}</div>
                </div>}

                {DisplayHelper.isValid(lineDetailObj.QUANTITY) && <div className="action-item">
                    <label>Quantity</label>
                    <div className="value">{lineDetailObj.QUANTITY}</div>
                </div>}

                {DisplayHelper.isValid(lineDetailObj.SOW) && <div className="action-item">
                    <label>SOW</label>
                    <div className="value">{lineDetailObj.SOW}</div>
                </div>}

                {DisplayHelper.isValid(lineDetailObj.SERVICE_START_DATE) && <div className="action-item">
                    <label>Service Start Date</label>
                    <div className="value">{DisplayHelper.getMonDateFromISO(lineDetailObj.SERVICE_START_DATE)}</div>
                </div>}

                {DisplayHelper.isValid(lineDetailObj.SERVICE_END_DATE) && <div className="action-item">
                    <label>Service End Date</label>
                    <div className="value">{DisplayHelper.getMonDateFromISO(lineDetailObj.SERVICE_END_DATE)}</div>
                </div>}
                
                <AdditionalInfo isGLCodeDisable={isGLCodeDisable} additionalInfo={additionalInfo} ></AdditionalInfo>
            </>}

            {contentShowHide === false && <Pressable onPress={contentShowHideHandler} style={[homeScreenStyle.lineScreen.row, {flex: 1, justifyContent: 'center', padding: 0, margin: 0}]}>
                <AntDesign name="down" size={20} color="#00619a" />
            </Pressable>}
        </View>
    </>)
}
export default ReqListRequest;