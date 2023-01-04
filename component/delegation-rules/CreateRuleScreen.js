import { Text, View, Button,  TextInput, Pressable, Image, Platform } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ReassingBox from '../UI/Reassign/ReassingBox';
import { delegationRuleStyle } from '../../styles/global';
import moment from 'moment';
import { useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';

const initialRequest = {
    formObj: {
        approvalDetails: '', startDate: null, endDate: null,
        notes: '', reassignUser: '', action: 'FORWARD', actionType: 'CREATE',
        ruleId: ''
    }
};

const dateFormat = 'YYYY-MM-DD';

const getFormatedString = (dateString) => {
    const dateMomentObj = moment(dateString);
    return (dateMomentObj.isValid()) ? dateMomentObj.format(dateFormat) : null;
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FORM":
            state.formObj[action.payload.formField] = action.payload.value;
            const formObj = { ...state.formObj };
            return { ...state, formObj: formObj };
        case "RESET_FORM":
            return { ...state, formObj: {...initialRequest.formObj} };
        case "EDIT_FORM":
            state.formObj.actionType = 'UPDATE';
            state.formObj.approvalDetails = action.payload.ITEM_TYPE;
            state.formObj.startDate = getFormatedString(action.payload.BEGIN_DATE);
            state.formObj.endDate = getFormatedString(action.payload.END_DATE);
            state.formObj.notes = action.payload.MESSAGE;
            state.formObj.reassignUser = {NTID: action.payload.REASSIGN_NTID, EMPLOYEE_NAME: action.payload.REASSIGN};
            state.formObj.action = (action.payload.RULE_ACTION.toLowerCase() === 'delegate') ? 'FORWARD' : 'TRANSFER';
            state.formObj.ruleId = action.payload.RULE_ID;
            return { ...state, formObj: { ...state.formObj } };
        default:
            return state;
    }
};


const data = [
    { label: '-Select-', value: '0' },
    { label: 'AP Invoice(s)', value: '1' },
    { label: 'CAR Approval', value: '2' },
    { label: 'Change Request(s)', value: '3' },
    { label: 'Requisitions(s)', value: '4' },
    { label: 'Finsys Access Approval', value: '5' },
    { label: 'Change Management Request(s)', value: '6' }
];


const CreateRuleScreen = () => {
    const [resultSelector, dispatch] = useReducer(reducer, initialRequest);
    const rulesSelector = useSelector((state) => state.rules);
    const editObject = rulesSelector.editObj;
    const approvalTypeList = rulesSelector.approvalList;
    const [value, setValue] = useState(null);
    /// const [isFocus, setIsFocus] = useState(false);
    // console.log(resultSelector.formObj);
    
    const radio_props = [ {label: 'Delegate', value: 0 } ];

    const handleFormChange = (event, formField) => {
        dispatch({ type: "UPDATE_FORM", payload: { value: event, formField } });
    }

    return (    
        <View style={delegationRuleStyle.createRuleScreen.container}>
            <View style={{marginBottom: 20}}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>Approval Type:</Text>

                <Dropdown
                    style={[delegationRuleStyle.createRuleScreen.dropdown]}
                    itemTextStyle={{ fontSize: 14 }}
                    placeholderStyle={delegationRuleStyle.createRuleScreen.placeholderStyle}
                    selectedTextStyle={delegationRuleStyle.createRuleScreen.selectedTextStyle}
                    iconStyle={delegationRuleStyle.createRuleScreen.iconStyle}
                    data={approvalTypeList}
                    maxHeight={300}
                    labelField="MEANING"
                    valueField="LOOKUP_CODE"
                    placeholder={ '-Select-'}
                    value={resultSelector.formObj.approvalDetails}
                    onChange={(event) => {
                        handleFormChange(event.LOOKUP_CODE, 'approvalDetails')
                    }} 
                />
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
                <TextInput multiline={true} onChangeText={(event) => handleFormChange(event, 'notes')} 
                    numberOfLines={Platform.OS === 'ios' ? null : 5 } 
                    minHeight={(Platform.OS === 'ios' && 5) ? (20 * 5) : null} 
                    style={delegationRuleStyle.createRuleScreen.textArea}  />
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>*Reassing To:</Text>
                <View style={{flexDirection: "row"}}>
                    <ReassingBox screenName={'CreateRuleScreen'}></ReassingBox>
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