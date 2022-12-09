import { Text, View } from "react-native"
import { homeScreenStyle } from '../../styles/global';

const AttachmentScreen = () => {
    return (<View>
        <View style={homeScreenStyle.attachmentsScreen.nameContainer}>
            <Text style={homeScreenStyle.attachmentsScreen.labeValue}>Invoice Image</Text>
        </View>
    </View>)
}
export default AttachmentScreen;