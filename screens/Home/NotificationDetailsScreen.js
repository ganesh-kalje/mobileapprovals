import { View, Text, Pressable, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import NotificationHeader from "../../component/Home/NotificationHeader";
import Actions from "../../component/Home/Actions";
import { homeScreenStyle } from '../../styles/global';

const NotificationDetailsScreen = () => {
    const navigate = useNavigation();

    return <View style={[homeScreenStyle.notificationDetails.card, homeScreenStyle.notificationDetails.shadowProp, {flex: 1}]}>
        <NotificationHeader></NotificationHeader>

        <View style={{ paddingTop: 5, borderBottomWidth: 1, borderColor: '#dde3e6' }}>
            <Text style={homeScreenStyle.notificationDetails.mainHeader}>INV44525</Text>
            <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>GX5PORTAL</Text>
            <Text style={homeScreenStyle.notificationDetails.mainHeader}>Amount</Text>
            <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>5.025.00</Text>
            <Text style={homeScreenStyle.notificationDetails.mainHeader}>Supplier</Text>
            <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>TECH SYSTEM INC</Text>
            <Text style={homeScreenStyle.notificationDetails.mainHeader}>Invoice Date</Text>
            <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>02-Sep-2022</Text>
        </View>

        <Pressable onPress={() => navigate.navigate("Lines")}>
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