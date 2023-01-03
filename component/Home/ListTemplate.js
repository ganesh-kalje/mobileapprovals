import { Pressable, Text, View, FlatList, SafeAreaView } from "react-native"
import { homeScreenStyle } from "../../styles/global";
import { AntDesign } from '@expo/vector-icons';
import DisplayHelper from "../../helpers/display-helper";
const ListTemplate = ({ lineDetailObj, infoObj }) => {

    return (<>
        <View style={[homeScreenStyle.lineScreen.boxItem]}>
            <View style={{ alignItems: 'flex-end' }}>
                <AntDesign name="down" size={20} color="#00619a" />
            </View>

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

            <View style={homeScreenStyle.lineScreen.separator}></View>

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
        </View>
    </>)
}
export default ListTemplate;