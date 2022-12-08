import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { homeScreenStyle } from '../../styles/global';

const NotificationCard = ({ mapKey, displayCount }) => {
    const navigate = useNavigation();
    const kvArray = [['apinvapr', {
        source: require('../../assets/images/APinvoice.png'),
        style: { width: 45, height: 50 },
        title: 'AP Invoice'
    }], ['pabudwf', {
        source: require('../../assets/images/car1.png'),
        style: { width: 40, height: 50 },
        title: 'Car Approval'
    }], ['poreqcha', {
        source: require('../../assets/images/Change.png'),
        style: { width: 45, height: 50 },
        title: 'Change Request(s)'
    }], ['apexp', {
        source: require('../../assets/images/expense.png'),
        style: { width: 45, height: 50 },
        title: 'Expenses'
    }], ['reqapprv', {
        source: require('../../assets/images/Requisition.png'),
        style: { width: 40, height: 50 },
        title: 'Requisition'
    }], ['xxcmstoc', {
        source: require('../../assets/images/onecard.png'),
        style: { width: 45, height: 50 },
        title: 'OneCard'
    }], ['xxcmstra', {
        source: require('../../assets/images/finsys.png'),
        style: { width: 45, height: 50 },
        title: 'finsys'
    }], ['porpocha', {
        source: require('../../assets/images/PO.png'),
        style: { width: 45, height: 50 },
        title: 'PO'
    }], ['cmappr', {
        source: require('../../assets/images/CM_App_icon.png'),
        style: { width: 45, height: 50 },
        title: 'CM'
    }]];

    const notificationMap = new Map(kvArray);

    return <Pressable onPress={() => navigate.navigate("PendingAction")}><View style={[homeScreenStyle.notification.card, homeScreenStyle.notification.shadowProp]} >
        <View style={homeScreenStyle.notification.infoSpan}>
            <Image source={notificationMap.get(mapKey).source}
                fadeDuration={0} style={notificationMap.get(mapKey).style}></Image>
            <Text style={homeScreenStyle.notification.infoSpanCounter}>{displayCount}</Text>
        </View>

        <View style={homeScreenStyle.notification.infoSpan}>
            <Text>{notificationMap.get(mapKey).title}</Text>
            <Text style={homeScreenStyle.notification.infoSpanArrow}><AntDesign name="arrowright" size={20} color="#646a70" /></Text>
        </View>

        <View style={homeScreenStyle.notification.styleDivider}></View>
    </View></Pressable>
}
export default NotificationCard;