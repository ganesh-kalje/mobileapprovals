import { Text, View, Pressable } from 'react-native';
import { delegationRuleStyle } from '../../styles/global';


const ViewRuleScreen = () => {
    return (<>
        <View style={[delegationRuleStyle.viewRuleScreen.card, delegationRuleStyle.viewRuleScreen.shadowProp]}>
            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Rule Name</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>Delegate: ARORA, MEENAKSHI</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Item Type</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>Change Request(s)</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Start Date</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>11-Oct-2022</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>End Date</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>15-Oct-2022</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Pressable style={delegationRuleStyle.viewRuleScreen.buttonContainer}>
                    <Text style={delegationRuleStyle.viewRuleScreen.buttonStlye}>Edit</Text>
                </Pressable>
                <Pressable style={delegationRuleStyle.viewRuleScreen.buttonContainer}>
                    <Text style={delegationRuleStyle.viewRuleScreen.buttonStlye}>Delete</Text>
                </Pressable>

            </View>
        </View>

        <View style={[delegationRuleStyle.viewRuleScreen.card, delegationRuleStyle.viewRuleScreen.shadowProp]}>
            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Rule Name</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>Delegate: ARORA, MEENAKSHI</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Item Type</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>Change Request(s)</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Start Date</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>11-Oct-2022</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>End Date</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>15-Oct-2022</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Pressable style={delegationRuleStyle.viewRuleScreen.buttonContainer}>
                    <Text style={delegationRuleStyle.viewRuleScreen.buttonStlye}>Edit</Text>
                </Pressable>
                <Pressable style={delegationRuleStyle.viewRuleScreen.buttonContainer}>
                    <Text style={delegationRuleStyle.viewRuleScreen.buttonStlye}>Delete</Text>
                </Pressable>

            </View>
        </View>
    </>);
}

export default ViewRuleScreen;