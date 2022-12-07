import { Text, View, Button, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ReassingBox from '../UI/Reassign/ReassingBox';




const CreateRuleScreen = () => {
    const radio_props = [ {label: 'Delegate', value: 0 } ];

    const getInitialState = () => {
        return {
            value: 0,
        }
    }

    return (    
        <View style={styles.container}>
            <View style={{marginBottom: 20}}>
                <Text style={styles.label}>Approval Type:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.label}>*Start Date:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.label}>*End Date:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View>
                <Text style={styles.label}>Notes:</Text>
                <TextInput multiline={true} style={styles.textArea} numberOfLines={5} />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.label}>*Reassing To:</Text>
                <View style={{flexDirection: "row"}}>
                    <ReassingBox></ReassingBox>
                </View>
            </View>

            <View style={{ marginBottom: 10 }}>
                <RadioForm buttonSize={10} buttonOuterSize={20} radio_props={radio_props} initial={0} onPress={(value) => { }} />
            </View>

            <View style={{ marginBottom: 10, alignItems: 'center' }}>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Submit</Text>
                </Pressable>
            </View>
           

            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 10}}>Fields marked with * are mandatory</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textInput: {
        backgroundColor: '#fff',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 0,
        margin: 0,
        height: 40
    },
    textArea: {
        backgroundColor: '#fff',
        textAlignVertical: 'top',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 0,
        margin: 0,
    },
    label: {
        color: '#2a2c2d',
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 5
    },

    buttonContainer: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#2b9cd8',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        width: '40%',
        textAlign: 'center',
    },
    buttonStlye: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
});
export default CreateRuleScreen;