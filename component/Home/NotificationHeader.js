import { View, Text, StyleSheet} from "react-native";
import { homeScreenStyle } from '../../styles/global';

const NotificationHeader = () => {
    return (<>
        <Text style={homeScreenStyle.notificationHeaderSection.mainHeader}>INV44525</Text>
        <Text style={homeScreenStyle.notificationHeaderSection.descriptionSpan}>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,</Text>
        <View style={homeScreenStyle.notificationHeaderSection.separator}></View>
    </>)
}

export default NotificationHeader;
