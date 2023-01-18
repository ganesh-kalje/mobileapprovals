import { Text, View, Button, TextInput, Pressable, Image, Platform, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ReassingBox from '../UI/Reassign/ReassingBox';
import { delegationRuleStyle } from '../../styles/global';
import moment from 'moment';
import { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInputMask } from 'react-native-masked-text'
import { sessionDataActions } from '../../store/session-data';

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
            return { ...state, formObj: { ...initialRequest.formObj } };
        case "EDIT_FORM":
            state.formObj.actionType = 'UPDATE';
            state.formObj.approvalDetails = action.payload.ITEM_TYPE;
            state.formObj.startDate = getFormatedString(action.payload.BEGIN_DATE);
            state.formObj.endDate = getFormatedString(action.payload.END_DATE);
            state.formObj.notes = action.payload.MESSAGE;
            state.formObj.reassignUser = { NTID: action.payload.REASSIGN_NTID, EMPLOYEE_NAME: action.payload.REASSIGN };
            state.formObj.action = (action.payload.RULE_ACTION.toLowerCase() === 'delegate') ? 'FORWARD' : 'TRANSFER';
            state.formObj.ruleId = action.payload.RULE_ID;
            return { ...state, formObj: { ...state.formObj } };
        default:
            return state;
    }
};

const CreateRuleScreen = () => {
    const [resultSelector, dispatch] = useReducer(reducer, initialRequest);
    const rulesSelector = useSelector((state) => state.rules);
    const editObject = rulesSelector.editObj;
    const approvalTypeList = rulesSelector.approvalList;
    
    const [dateValidation, setDateValidtion] = useState({ isStartDateValid: true, isEndDateValid: true });
    const radio_props = [{ label: 'Delegate', value: 0 }];
    const dispatchCall = useDispatch();
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const selectedSearchUser = useSelector((state) => state.sessionData.selectedSearchUser);
    const getSelectedUser = (userResult) => dispatch({ type: "UPDATE_FORM", payload: { value: userResult, formField: 'reassignUser' } });

    const handleFormChange = (event, formField) => {
        dispatch({ type: "UPDATE_FORM", payload: { value: event, formField } });
    }

    const submitHandler = () => {
        const isStartDateValid = moment(resultSelector.formObj.startDate, dateFormat, true);
        if (resultSelector.formObj.startDate === null || !isStartDateValid.isValid()) {
            console.error('Please enter valid start date.');
            return;
        }

        const isEndDateValid = moment(resultSelector.formObj.endDate, dateFormat, true);
        if (resultSelector.formObj.endDate === null || !isEndDateValid.isValid()) {
            console.error('Please enter valid end date.');
            return;
        }

        if (resultSelector.formObj.endDate !== null) {
            if (moment(resultSelector.formObj.startDate) >  moment(resultSelector.formObj.endDate)) {
                console.error('End date should not be greater than start date');
                // showMessage('error', 'End date should not be greater than start date');
                return;
            }
        }
        
        if (selectedSearchUser === null || selectedSearchUser === '') {
            console.error('Please select user to assign.');
            // showMessage('error', 'Please select user to assign.');
            return;
        }

        const data = {
            NTID: loggedInNTID, ACTION: resultSelector.formObj.action.toUpperCase(),
            ACTION_TYPE: resultSelector.formObj.actionType,
            BEGIN_DATE: resultSelector.formObj.startDate, END_DATE: resultSelector.formObj.endDate,
            MESSAGE_TYPE: resultSelector.formObj.approvalDetails, MESSAGE_NAME: null,
            REASSIGN_NTID: selectedSearchUser.NTID, RULE_COMMENT: resultSelector.formObj.notes
        }
        console.log(data);
        if(resultSelector.formObj.actionType === 'UPDATE') {
            data.MESSAGE_TYPE = '';
            data.RULE_ID = resultSelector.formObj.ruleId;
        }
        // submitRule(data);
    }

    useEffect(() => {
       // dispatchCall(sessionDataActions.clearSelectedUser());
    }, [dispatchCall]);

    return (
        <View style={delegationRuleStyle.createRuleScreen.container}>
            <View style={{ marginBottom: 20 }}>
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

            <View style={{ marginBottom: 20 }}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>*Start Date:</Text>
                <TextInputMask
                    style={delegationRuleStyle.createRuleScreen.textInput}
                    placeholder={dateFormat}
                    type={'datetime'}
                    options={{
                        format: dateFormat
                    }}
                    onChangeText={text => {
                        const date = moment(text, dateFormat, true);
                        if (date) {
                            handleFormChange(text, 'startDate')
                        }
                        setDateValidtion((state) => {
                            return { ...state, isStartDateValid: date.isValid() }
                        })
                    }}
                />
                {!dateValidation.isStartDateValid && <Text style={{ color: 'red', fontSize: 10 }}>Please enter valid date</Text>}
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>*End Date:</Text>
                <TextInputMask
                    style={delegationRuleStyle.createRuleScreen.textInput}
                    placeholder={dateFormat}
                    type={'datetime'}
                    options={{
                        format: dateFormat
                    }}
                    onChangeText={text => {
                        const date = moment(text, dateFormat, true);
                        if (date) {
                            handleFormChange(text, 'endDate')
                        }
                        setDateValidtion((state) => {
                            return { ...state, isEndDateValid: date.isValid() }
                        })
                    }}
                />
                {!dateValidation.isEndDateValid && <Text style={{ color: 'red', fontSize: 10 }}>Please enter valid date</Text>}
            </View>

            <View>
                <Text style={delegationRuleStyle.createRuleScreen.label}>Notes:</Text>
                <TextInput multiline={true} onChangeText={(event) => handleFormChange(event, 'notes')}
                    numberOfLines={Platform.OS === 'ios' ? null : 5}
                    minHeight={(Platform.OS === 'ios' && 5) ? (20 * 5) : null}
                    style={delegationRuleStyle.createRuleScreen.textArea} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={delegationRuleStyle.createRuleScreen.label}>*Reassing To:</Text>
                <View style={{ flexDirection: "row" }}>
                    <ReassingBox screenName={'CreateRuleScreen'}></ReassingBox>
                </View>
            </View>

            <View style={{ marginBottom: 10 }}>
                <RadioForm buttonSize={10} buttonOuterSize={20} radio_props={radio_props} initial={0} onPress={(value) => { }} />
            </View>

            <View style={{ marginBottom: 10, alignItems: 'center' }}>
                <Pressable onPress={submitHandler} style={delegationRuleStyle.createRuleScreen.buttonContainer}>
                    <Text style={delegationRuleStyle.createRuleScreen.buttonStlye}>Submit</Text>
                </Pressable>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 10 }}>Fields marked with * are mandatory</Text>
            </View>

        </View>
    );
}
export default CreateRuleScreen;