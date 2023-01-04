import { Text, View, TextInput, Pressable  } from "react-native";
import { homeScreenStyle } from "../../styles/global";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ReassingBox from "../../component/UI/Reassign/ReassingBox";
const Reassign = () => {
    const radioProps = [ {label: 'Delegate', value: 0 }, {label: 'Transfer', value: 0 } ];

    return <View style={{padding: 10}}>
        <View style={{ margin: 10 }}>
            <Text style={homeScreenStyle.reassign.label}>Reassign To:</Text>
            <View style={{ flexDirection: "row" }}>
                <ReassingBox screenName={'Reassign'}></ReassingBox>
            </View>
        </View>

        <View style = {{margin: 10}}>
            <Text style={homeScreenStyle.reassign.label}>Comments:</Text>
            <TextInput multiline={true} onChangeText={(event) => {}}
                numberOfLines={Platform.OS === 'ios' ? null : 5}
                minHeight={(Platform.OS === 'ios' && 5) ? (20 * 5) : null}
                style={homeScreenStyle.reassign.textArea} />
        </View>

        <View style={{ margin: 10 }}>
            <RadioForm buttonSize={10} buttonOuterSize={20} 
                radio_props={radioProps} initial={0} onPress={(value) => { }} />
        </View>

        <View style={{ margin: 10, alignItems: 'center' }}>
            <Pressable style={homeScreenStyle.reassign.buttonContainer}>
                <Text style={homeScreenStyle.reassign.buttonStlye}>Submit</Text>
            </Pressable>
        </View>
    </View>
}
export default Reassign;