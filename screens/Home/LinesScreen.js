import { Text, View } from "react-native"
import NotificationHeader from "../../component/Home/NotificationHeader";
import { AntDesign } from '@expo/vector-icons';
import { homeScreenStyle } from '../../styles/global';

const LinesScreen = () => {
    return (<View style={[homeScreenStyle.lineScreen.card, homeScreenStyle.lineScreen.shadowProp, { flex: 1}]}>
        <NotificationHeader></NotificationHeader>
        
        <View style={[homeScreenStyle.lineScreen.boxItem]}>
            <View style={{alignItems: 'flex-end'}}>
                <AntDesign name="down" size={20} color="#00619a" />
            </View>
            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Line #</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Amount</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>4850</Text>
            </View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Description</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>

            <View style={homeScreenStyle.lineScreen.separator}></View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Distribution #</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>GL Description</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>
        </View>

        <View style={[homeScreenStyle.lineScreen.boxItem]}>
            <View style={{alignItems: 'flex-end'}}>
                <AntDesign name="down" size={20} color="#00619a" />
            </View>
            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Line #</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Amount</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>4850</Text>
            </View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Description</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>

            <View style={homeScreenStyle.lineScreen.separator}></View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>Distribution #</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.lineScreen.row]}>
                <Text style={homeScreenStyle.lineScreen.labelStyle}>GL Description</Text>
                <Text style={homeScreenStyle.lineScreen.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>
        </View>
    </View>)
}

export default LinesScreen;