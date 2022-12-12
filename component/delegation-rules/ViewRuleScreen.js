import { Text, View, Pressable, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import DisplayHelper from '../../helpers/display-helper';
import { selectAllRules } from '../../store/delegation-rules';
import { delegationRuleStyle } from '../../styles/global';


const ViewRuleScreen = () => {
    const ruleSelector = useSelector(selectAllRules);
    
    console.log('rules selection 123',  ruleSelector);

    const renderItem = ({ item }) => (
        <View style={[delegationRuleStyle.viewRuleScreen.card, delegationRuleStyle.viewRuleScreen.shadowProp]}>
            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Rule Name</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>{item.RULE_NAME}</Text>
            </View>

            {DisplayHelper.isValid(item.ITEM_TYPE) && <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Item Type</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>{item.ITEM_TYPE}</Text>
            </View>}

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>Start Date</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>{DisplayHelper.getMonDateFromISO(item.BEGIN_DATE)}</Text>
            </View>

            <View style={delegationRuleStyle.viewRuleScreen.listView}>
                <Text style={delegationRuleStyle.viewRuleScreen.labelStyle}>End Date</Text>
                <Text style={delegationRuleStyle.viewRuleScreen.valueStyle}>{DisplayHelper.getMonDateFromISO(item.END_DATE)}</Text>
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
    );

    return (<>
        <SafeAreaView>
            <FlatList data={ruleSelector} renderItem={renderItem} keyExtractor={item => item.RULE_ID} />
        </SafeAreaView>
    </>);
}

export default ViewRuleScreen;