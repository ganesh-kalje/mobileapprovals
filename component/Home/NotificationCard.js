import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

    return <Pressable onPress={() => navigate.navigate("PendingAction")}><View style={[styles.card, styles.shadowProp]} >
        <View style={styles.infoSpan}>
            <Image source={notificationMap.get(mapKey).source}
                fadeDuration={0} style={notificationMap.get(mapKey).style}></Image>
            <Text style={styles.infoSpanCounter}>{displayCount}</Text>
        </View>

        <View style={styles.infoSpan}>
            <Text>{notificationMap.get(mapKey).title}</Text>
            <Text style={styles.infoSpanArrow}><AntDesign name="arrowright" size={20} color="#646a70" /></Text>
        </View>

        <View style={styles.styleDivider}></View>
    </View></Pressable>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        padding: 10,
        backgroundColor: '#fff',
        margin: 7.5,
        position: 'relative',
        borderRadius: 6,
        backgroundPosition: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#52006A',
        elevation: 20,
    },
    styleDivider: {
        backgroundColor: '#2a2c2d',
        height: 1,
        margin: 10,
        width: 50,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    infoSpan: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom: 20
    },
    infoSpanCounter: {
        width: 32.5,
        height: 32.5,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderColor: '#646a70',
        color: '#646a70',
        borderWidth: 1,
        right: 10,
        top: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    infoSpanArrow: {
        width: 32.5,
        height: 32.5,
        color: '#646a70',
        right: 10,
        top: 10,
        fontSize: 18,
        textAlign: 'center',
    }
});

export default NotificationCard;