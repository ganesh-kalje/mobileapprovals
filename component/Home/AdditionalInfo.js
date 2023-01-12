import DisplayHelper from "../../helpers/display-helper";
import { homeScreenStyle } from "../../styles/global";
import { Pressable, Text, View, FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const AdditionalInfo = (state) => {
    const navigate = useNavigation();
    const additonalInfo = (state.additionalInfo) ? state.additionalInfo : [];
    const isGLCodeDisable = state.isGLCodeDisable;
    const stateOfServiceSelector = useSelector((state) => state.notification.statesOfService);
    
    const getStateLookup = (stateCode) => {
        const filterResult = stateOfServiceSelector.filter((currentObj) => currentObj.LookupCode.toLowerCase() === stateCode.toLowerCase());
        return (filterResult.length > 0) ? filterResult[0]['Meaning'] : 'N/A';
    }

    const changeStateHandler = (selectedObj) => {
        const stateData = {
            P_INVOICE_ID : (selectedObj.INVOICE_ID) ? selectedObj.INVOICE_ID : null,
            P_INVOICE_DIST_NUM : (selectedObj.DISTRIBUTION_NUM) ? selectedObj.DISTRIBUTION_NUM : null,
            P_STATE_SERV_CODE_OLD : selectedObj.STATE_OF_SERVICES, 
            P_INVOICE_LINE_NUM : selectedObj.INVOICE_LINE_NUM
        }
        navigate.navigate("StateSearch", stateData)
    }

    const changeGLCodeHandler = (infoObj) => {
        const stateObj = {
            selectedGlCode: infoObj.GL,
            INVOICE_LINE_NUM: infoObj.INVOICE_LINE_NUM,
            INVOICE_ID: (infoObj.INVOICE_ID) ? infoObj.INVOICE_ID : null,
            DISTRIBUTION_NUM: (infoObj.DISTRIBUTION_NUM) ? infoObj.DISTRIBUTION_NUM : null,
            DIST_CODE_COMBINATION_ID: (infoObj.DIST_CODE_COMBINATION_ID) ? infoObj.DIST_CODE_COMBINATION_ID : null
        }
        navigate.navigate("GLCodeSearch", stateObj);
    }

    
    const renderItem = ({ item }) => {
        
        return <>
            {DisplayHelper.isValid(item.DISTRIBUTION_NUM) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Distribution #</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{item.DISTRIBUTION_NUM}</Text>
            </View>}

            {DisplayHelper.isValid(item.AMOUNT) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Distribution Amount</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{DisplayHelper.amountFormat(item.AMOUNT)}</Text>
            </View>}

            {DisplayHelper.isValid(item.GL) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Charge Account</Text>
                <Pressable onPress={() => changeGLCodeHandler(item)} style={{ borderWidth: 1, borderColor: '#2B9CD8', padding: 5, width: '70%' }}>
                    <Text style={homeScreenStyle.lineScreen.valueStyle}>{item.GL}</Text>
                </Pressable>
            </View>}

            {DisplayHelper.isValid(item.GL_DESCRIPTION) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>GL Description</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{item.GL_DESCRIPTION}</Text>
            </View>}

            {DisplayHelper.isValid(item.STATE_OF_SERVICES) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>State of Service</Text>
                <Pressable onPress={() => changeStateHandler(item)} style={{borderWidth: 1, borderColor: '#2B9CD8', padding: 5, width: '70%'}}>
                    <Text>{getStateLookup(item.STATE_OF_SERVICES)}</Text>
                </Pressable>
            </View>}

            {DisplayHelper.isValid(item.PROJECT_NUMBER) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Project</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{item.PROJECT_NUMBER}</Text>
            </View>}

            {DisplayHelper.isValid(item.TASK_NUMBER) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Task</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{item.TASK_NUMBER}</Text>
            </View>}

            {DisplayHelper.isValid(item.EXPENDITURE_TYPE) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Expenditure Type</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{item.EXPENDITURE_TYPE}</Text>
            </View>}

            {DisplayHelper.isValid(item.EXPENDITURE_ITEM_DATE) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Expenditure Item Date</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{DisplayHelper.getMonDateFromISO(item.EXPENDITURE_ITEM_DATE)}</Text>
            </View>}

            {DisplayHelper.isValid(item.EXPENDITURE_ORG) && <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Org</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>{item.EXPENDITURE_ORG}</Text>
            </View>}


            

            
        </>
    }

    return <>
        <FlatList data={additonalInfo} renderItem={renderItem}  />
    </>
}

export default AdditionalInfo;