import { View, Text } from "react-native";
import { homeScreenStyle } from '../../styles/global';

const NotificationHeader = ({header, subHeader, SUBJECT}) => {
    
    return (<>
        <Text style={homeScreenStyle.notificationHeaderSection.mainHeader}>{header}</Text>
        <Text style={homeScreenStyle.notificationHeaderSection.descriptionSpan}>{subHeader} {SUBJECT}</Text>
        <View style={homeScreenStyle.notificationHeaderSection.separator}></View>
    </>)
}

export default NotificationHeader;
