import { Text, View } from "react-native";
import NotificationHeader from "../../component/Home/NotificationHeader";
import { homeScreenStyle } from '../../styles/global';

const ActionHistoryScreen = () => {
    return (<View style={[homeScreenStyle.actionHistoryScreen.card, homeScreenStyle.actionHistoryScreen.shadowProp, {flex: 1}]}>
        <NotificationHeader></NotificationHeader>
        <View style={[homeScreenStyle.actionHistoryScreen.boxItem]}>
            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>#</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>Sent</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action Date</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>2012-20-12</Text>
            </View>
        </View>

        <View style={[homeScreenStyle.actionHistoryScreen.boxItem]}>
            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>#</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>Sent</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action Date</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>2012-20-12</Text>
            </View>
        </View>

        <View style={[homeScreenStyle.actionHistoryScreen.boxItem]}>
            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>#</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>Sent</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action Date</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>2012-20-12</Text>
            </View>
        </View>

        <View style={[homeScreenStyle.actionHistoryScreen.boxItem]}>
            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>#</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>1</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>Sent</Text>
            </View>

            <View style={[homeScreenStyle.actionHistoryScreen.row]}>
                <Text style={homeScreenStyle.actionHistoryScreen.labelStyle}>Action Date</Text>
                <Text style={homeScreenStyle.actionHistoryScreen.valueStyle}>2012-20-12</Text>
            </View>
        </View>
    </View>)
}

export default ActionHistoryScreen;