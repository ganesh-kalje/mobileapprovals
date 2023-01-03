import { View, Text, Pressable, Image, Modal, TextInput, Platform } from "react-native";
import React, { useEffect, useReducer } from "react";
import {  homeScreenStyle } from '../../styles/global';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { selectRejectionReason, fetchRejectionReasonList } from "../../store/notiications";
import { useNavigation } from "@react-navigation/core";

const initialRequest = {ACTION_TYPE: '', MODAL_STATE: false, FORM_DATA: {rejection_reason: '', comment: ''}};
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_ACTION_TYPE': 
            return {...state, ACTION_TYPE: action.actionType}
        case 'SET_MODAL_STATE':
            return {...state, MODAL_STATE: action.modalState}
        case 'UPDATE_FORM':
            state.FORM_DATA[action.payload.formField] = action.payload.value;
            const formObj = {...state.FORM_DATA}
            return {...state, FORM_DATA: formObj};
        default:
            return state;
    }
}

const Actions = (props) => {
    const navigate = useNavigation();
    const dispatchCall = useDispatch();
    const [stateSelector, dispatch] = useReducer(reducer, initialRequest);
    const rejectionReason = useSelector(selectRejectionReason);
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const lookupCode = props.LOOKUP_CODE;
    const notificationId = props.NOTIFICATION_ID;
    const approvalDetails = props.approvalDetails;
    const approvalId = (approvalDetails !== null && approvalDetails.APPROVAL_ID) ? approvalDetails.APPROVAL_ID : null;
    const documentNumber = (approvalDetails !== null && approvalDetails.DOCUMENT_NUMBER) ? approvalDetails.DOCUMENT_NUMBER : null;
    const moreAssignState = {lookupCode, notificationId, documentNumber};
    
    const handleAction = (actionType) => {
        dispatch({type: 'SET_ACTION_TYPE', actionType: actionType});
        dispatch({type: 'SET_MODAL_STATE', modalState: true});
    }

    const performApprovalAction = (postData) => {
        console.log(postData);
    }

    const saveChanges = () => {
        const comments = stateSelector.FORM_DATA.comment;
        if(lookupCode === 'CMAPPR' && (comments === null || comments === '')) {
            console.log('Please enter comment');
            return;
        }

        if(stateSelector.ACTION_TYPE === 'REJECT' && (comments === null || comments === '')) {
            console.log('Please enter comment');
            return;
        }

        const postData = {NTID: loggedInNTID, ACTION: stateSelector.ACTION_TYPE, APPROVAL_TYPE_LOOKUP_CODE: lookupCode,
            ApprovalActionInput: [{NOTIFICATION_ID: notificationId, COMMENTS: stateSelector.FORM_DATA.comment}]};
        
        if (stateSelector.ACTION_TYPE === 'REJECT') {
            postData.REJECT_REASON = stateSelector.FORM_DATA.rejection_reason;
        }

        if(lookupCode === 'CMAPPR') {
            postData.ACTION = (stateSelector.ACTION_TYPE === 'APPROVE') ? 'Approve' : "Reject";
            postData.ApprovalActionInput[0].APPROVAL_ID = approvalId;
        }
        performApprovalAction(postData);
    }

    const handleFormChange = (value, formField) => {
        dispatch({type: 'UPDATE_FORM', payload: {value: value, formField}});
    }

    const handleClose = () => dispatch({type: 'SET_MODAL_STATE', modalState: false});

    useEffect(() => {
        console.log(rejectionReason);
        const postObj = (lookupCode === "XXCMSTRA" || lookupCode === "XXCMSTOC") ? { APPROVAL_TYPE_CODE: lookupCode } : null;
        if (rejectionReason.rejectionReasonList.length !== 0) {
            if (rejectionReason.lookupCode === null && (lookupCode === "XXCMSTRA" || lookupCode === "XXCMSTOC")) {
                dispatchCall(fetchRejectionReasonList(postObj))
            }
        } else if (rejectionReason.rejectionReasonList.length === 0) {
            dispatchCall(fetchRejectionReasonList(postObj));
        }
    }, [lookupCode, rejectionReason, dispatchCall]);
    
    return (<>
        <View style={homeScreenStyle.actionScren.centeredView}>
            <Modal animationType="slide" transparent={true} visible={stateSelector.MODAL_STATE}
                onRequestClose={() => { handleClose() }} >
                
                <View style={homeScreenStyle.actionScren.centeredView}>
                    <View style={homeScreenStyle.actionScren.modalView}>
                        <Text style={homeScreenStyle.actionScren.modalText}>{stateSelector.ACTION_TYPE}</Text>
                        {stateSelector.ACTION_TYPE === 'REJECT' && (lookupCode === 'APINVAPR' || lookupCode === 'XXCMSTRA' && lookupCode === 'XXCMSTOC') && <View>
                            <Text style={homeScreenStyle.actionScren.label}>Rejection Reason:</Text>
                            <Dropdown
                                style={[homeScreenStyle.actionScren.dropdown]}
                                itemTextStyle={{ fontSize: 14 }}
                                placeholderStyle={homeScreenStyle.actionScren.placeholderStyle}
                                selectedTextStyle={homeScreenStyle.actionScren.selectedTextStyle}
                                iconStyle={homeScreenStyle.actionScren.iconStyle}
                                data={rejectionReason.rejectionReasonList}
                                maxHeight={300}
                                labelField="MEANING"
                                valueField="LOOKUP_CODE"
                                placeholder={ '-Select-'}
                                value={null}
                                onChange={(event) => handleFormChange(event.LOOKUP_CODE, 'rejection_reason')} 
                            />
                        </View>}

                        <View>
                            <Text style={homeScreenStyle.actionScren.label}>Comments:</Text>
                            <TextInput multiline={true} style={homeScreenStyle.actionScren.textArea} 
                                onChangeText={(event) => handleFormChange(event, 'comment')} 
                                numberOfLines={Platform.OS === 'ios' ? null : 5 } minHeight={(Platform.OS === 'ios' && 5) ? (20 * 5) : null}  />
                        </View>

                        <View style={homeScreenStyle.actionScren.buttonContainer}>
                            <Pressable style={[homeScreenStyle.actionScren.modalButton, homeScreenStyle.actionScren.modalButton.rightButtonBorder]} onPress={() => saveChanges()}>
                                <Text style={homeScreenStyle.actionScren.modalButton.textStyle}>Submit</Text>
                            </Pressable>
                            <Pressable style={[homeScreenStyle.actionScren.modalButton]} onPress={() => handleClose()}>
                                <Text style={homeScreenStyle.actionScren.modalButton.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

        <View style={homeScreenStyle.actionScren.bottomContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Pressable android_ripple={homeScreenStyle.actionScren.btnApr} onPress={() => handleAction('APPROVE')} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/approved_1.png')}
                        fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                    <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnApr]}>Approve</Text>
                </Pressable>

                <Pressable android_ripple={homeScreenStyle.actionScren.btnRjt} onPress={() => handleAction('REJECT')} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/reject_1.png')}
                        fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                    <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnRjt]}>Reject</Text>
                </Pressable>

                {lookupCode !== 'CMAPPR' && <>
                    <Pressable android_ripple={homeScreenStyle.actionScren.btnReassing} onPress={() => navigate.navigate("Reassign", moreAssignState)} style={{ flexDirection: 'row' }}>
                        <Image source={require('./../../assets/images/Reass.png')}
                            fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                        <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnReassing]}>Reassign</Text>
                    </Pressable>

                    <Pressable android_ripple={homeScreenStyle.actionScren.btnMoreInfo} onPress={() => navigate.navigate("RequestInfo", moreAssignState)} style={{ flexDirection: 'row' }}>
                        <Image source={require('./../../assets/images/More_1.png')}
                            fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                        <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnMoreInfo]}>More Info</Text>
                    </Pressable>
                </>}
            </View>
        </View>
    </>)
}

export default Actions;