import { Text, View, TextInput, Pressable } from "react-native";
import { homeScreenStyle } from "../../styles/global";

import ReassingBox from "../../component/UI/Reassign/ReassingBox";
const RequestInfo = () => {

    return <View style={{ padding: 10 }}>
        <View style={{ margin: 10 }}>
            <Text style={homeScreenStyle.reassign.label}>Reassign Information Form:</Text>
            <View style={{ flexDirection: "row" }}>
                <ReassingBox></ReassingBox>
            </View>
        </View>

        <View style={{ margin: 10 }}>
            <Text style={homeScreenStyle.reassign.label}>Comments:</Text>
            <TextInput multiline={true} onChangeText={(event) => { }}
                numberOfLines={Platform.OS === 'ios' ? null : 5}
                minHeight={(Platform.OS === 'ios' && 5) ? (20 * 5) : null}
                style={homeScreenStyle.reassign.textArea} />
        </View>



        <View style={{ margin: 10, alignItems: 'center' }}>
            <Pressable style={homeScreenStyle.reassign.buttonContainer}>
                <Text style={homeScreenStyle.reassign.buttonStlye}>Submit</Text>
            </Pressable>
        </View>
    </View>
}
export default RequestInfo;