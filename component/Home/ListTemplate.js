import { Pressable, Text, View, FlatList, SafeAreaView } from "react-native"
import { homeScreenStyle } from "../../styles/global";
import { AntDesign } from '@expo/vector-icons';
import DisplayHelper from "../../helpers/display-helper";
import { useState } from "react";
import axios from 'axios';
import AdditionalInfo from "./AdditionalInfo";

const ListTemplate = ({ lineDetailObj, infoObj }) => {
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

            {DisplayHelper.isValid(lineDetailObj.DESCRIPTION) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Description</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.DESCRIPTION}</Text>
            </View>}

            {contentShowHide && <>
                {DisplayHelper.isValid(lineDetailObj.PO_NUM) && <View style={[homeScreenStyle.lineScreen.row]}>
                    <Text style={homeScreenStyle.lineScreen.labelStyle}>PO#</Text>
                    <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.PO_NUM}</Text>
                </View>}

                {DisplayHelper.isValid(lineDetailObj.UOM) && <View style={[homeScreenStyle.lineScreen.row]}>
                    <Text style={homeScreenStyle.lineScreen.labelStyle}>UOM#</Text>
                    <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.UOM}</Text>
                </View>}

                {DisplayHelper.isValid(lineDetailObj.QUANTITY) && <View style={[homeScreenStyle.lineScreen.row]}>
                    <Text style={homeScreenStyle.lineScreen.labelStyle}>QUANTITY#</Text>
                    <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.QUANTITY}</Text>
                </View>}

                {DisplayHelper.isValid(lineDetailObj.UNIT_PRICE) && <View style={[homeScreenStyle.lineScreen.row]}>
                    <Text style={homeScreenStyle.lineScreen.labelStyle}>UNIT PRICE</Text>
                    <Text style={homeScreenStyle.lineScreen.valueStyle}>{lineDetailObj.UNIT_PRICE}</Text>
                </View>}
                
                <AdditionalInfo isGLCodeDisable={isGLCodeDisable} additionalInfo={additionalInfo} ></AdditionalInfo>
            </>}
            

            

            {contentShowHide === false && <Pressable onPress={contentShowHideHandler} style={[homeScreenStyle.lineScreen.row, {flex: 1, justifyContent: 'center', padding: 0, margin: 0}]}>
                <AntDesign name="down" size={20} color="#00619a" />
            </Pressable>}
        </View>
    </>)
}
export default ListTemplate;