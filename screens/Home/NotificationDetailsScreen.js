import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import NotificationHeader from "../../component/Home/NotificationHeader";
import Actions from "../../component/Home/Actions";
const NotificationDetailsScreen = () => {
    const navigate = useNavigation();

    return <View style={[styles.card, styles.shadowProp]}>
        <NotificationHeader></NotificationHeader>

        <View style={{ paddingTop: 5, borderBottomWidth: 1, borderColor: '#dde3e6' }}>
            <Text style={styles.mainHeader}>INV44525</Text>
            <Text style={styles.descriptionSpan}>GX5PORTAL</Text>
            <Text style={styles.mainHeader}>Amount</Text>
            <Text style={styles.descriptionSpan}>5.025.00</Text>
            <Text style={styles.mainHeader}>Supplier</Text>
            <Text style={styles.descriptionSpan}>TECH SYSTEM INC</Text>
            <Text style={styles.mainHeader}>Invoice Date</Text>
            <Text style={styles.descriptionSpan}>02-Sep-2022</Text>
        </View>

        <Pressable onPress={() => navigate.navigate("Lines")}>
            <View style={styles.actionLink}>
                <Text style={styles.actionLinkText}>Lines</Text>
                <AntDesign style={styles.arrowIcon} name="right" size={15} color="#2b9cd8" />
            </View>
        </Pressable>

        <Pressable onPress={() => navigate.navigate("ActionHistory")}>
            <View style={styles.actionLink}>
                <Text style={styles.actionLinkText}>Action History</Text>
                <AntDesign style={styles.arrowIcon} name="right" size={15} color="#2b9cd8" />
            </View>
        </Pressable>

        <Pressable onPress={() => navigate.navigate("Attachment")}>
            <View style={styles.actionLink}>
                <Text style={styles.actionLinkText}>Attachments</Text>
                <AntDesign style={styles.arrowIcon} name="right" size={15} color="#2b9cd8" />
            </View>
        </Pressable>

        <Actions></Actions>
    </View>
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
    mainHeader: {
        color: '#1f6f9a',
        fontSize: 16,
        fontWeight: '500'
    },
    descriptionSpan: {
        color: '#2a2a2a',
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10
    },
    separator: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#dde3e6'
    },
    actionLink: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#dde3e6'
    },
    actionLinkText: {
        color: '#2b9cd8',
        fontWeight: '500'
    },
    arrowIcon: {
        top: 0,
        fontWeight: 'bold',
        fontSize: 18
    }
});
export default NotificationDetailsScreen;