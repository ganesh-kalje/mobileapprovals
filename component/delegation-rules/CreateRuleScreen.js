import { Text, View, Button,  TextInput, Pressable, Image } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ReassingBox from '../UI/Reassign/ReassingBox';
import { delegationRuleStyle } from '../../styles/global';



const CreateRuleScreen = () => {
    const radio_props = [ {label: 'Delegate', value: 0 } ];

    const getInitialState = () => {
        return {
            value: 0,
        }
    }

    return (    
        <View style={delegationRuleStyle.createRuleScreen.container}>
            <View style={{marginBottom: 20}}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>Approval Type:</Text>
                <TextInput style={delegationRuleStyle.createRuleScreen.textInput} />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>*Start Date:</Text>
                <TextInput style={delegationRuleStyle.createRuleScreen.textInput} />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>*End Date:</Text>
                <TextInput style={delegationRuleStyle.createRuleScreen.textInput} />
            </View>

            <View>
                <Text style={delegationRuleStyle.createRuleScreen.label}>Notes:</Text>
                <TextInput multiline={true} style={delegationRuleStyle.createRuleScreen.textArea} numberOfLines={5} />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>*Reassing To:</Text>
                <View style={{flexDirection: "row"}}>
                    <ReassingBox></ReassingBox>
                </View>
            </View>

            <View style={{ marginBottom: 10 }}>
                <RadioForm buttonSize={10} buttonOuterSize={20} radio_props={radio_props} initial={0} onPress={(value) => { }} />
            </View>

            <View style={{ marginBottom: 10, alignItems: 'center' }}>
                <Pressable style={delegationRuleStyle.createRuleScreen.buttonContainer}>
                    <Text style={delegationRuleStyle.createRuleScreen.buttonStlye}>Submit</Text>
                </Pressable>
            </View>
           

            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 10}}>Fields marked with * are mandatory</Text>
            </View>

        </View>
    );
}
export default CreateRuleScreen;