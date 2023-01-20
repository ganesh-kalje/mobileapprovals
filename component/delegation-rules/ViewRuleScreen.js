import { Text, View, Pressable, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DisplayHelper from '../../helpers/display-helper';
import { delegationRulesActions, removeRule, selectAllRules } from '../../store/delegation-rules';
import { delegationRuleStyle } from '../../styles/global';
import { useNavigation } from "@react-navigation/core";
import { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const ViewRuleScreen = ({route, navigation}) => {
    const navigate = useNavigation();
    const ruleSelector = useSelector(selectAllRules);
    const dispatchCall = useDispatch();
    
    const deleteButtonHandler = async (ruleId) => {
        try {
            removeRule
            const data = { NTID: loggedInNTID, ACTION_TYPE: "DELETE", RULE_ID: ruleId };
            await dispatchCall(removeRule(data)).unwrap();
            showMessage('success', 'Record deleted succesfully.');
        } catch (err) {
            showMessage('error', err.message);
        }
    }

    const unsubscribe = navigation.addListener('tabPress', (e) => {
        // Prevent default action
        dispatchCall(delegationRulesActions.updateActionType({ value: 'CREATE' }))
        // e.preventDefault();
      });

    const editButtonHandler = (ruleObj) => {
        dispatchCall(delegationRulesActions.updateActionType({value: 'UPDATE'}));
        navigate.navigate("CreateRule", ruleObj);
        // state.operationHandler('update', ruleObj);
    }
    
    useEffect(() => {
        if (navigation.isFocused()) {
            // dispatchCall(delegationRulesActions.updateActionType({ value: 'CREATE' }))
        }
    }, [navigation.isFocused()]);

   
    
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
                <Pressable onPress={() => editButtonHandler(item)} style={delegationRuleStyle.viewRuleScreen.buttonContainer}>
                    <Text style={delegationRuleStyle.viewRuleScreen.buttonStlye}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteButtonHandler(item.RULE_ID)} style={delegationRuleStyle.viewRuleScreen.buttonContainer}>
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