import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchRules = createAsyncThunk('post/fetchRules', async (loggedInNTID) => {
    const urlToCallRules = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/rules.json`;
    const postObjRules = { NTID: loggedInNTID };
    const response = await axios.get(urlToCallRules);
    return (response.STATUS.toLowerCase() === 'success' && response.ApprovalReportOutput) ? response.ApprovalReportOutput : [];
})

export const fetchItemsType = createAsyncThunk('posts/fetchItemTypes', async (loggedInNTID) => {
    // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApproval/CIFANotificationApprovalRest/GetItemType`;
    const urlToCall = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/itemTypes.json`;
    const postObjRules = { NTID: loggedInNTID };
    const response = await axios.get(urlToCall);
    return (response.STATUS.toLowerCase() === 'success' && response.OutputType) ? response.OutputType : []
})

export const removeRule = createAsyncThunk('posts/removeItem', async (postData) => {
    // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApprovalAction/CIFANotificationApprovalActionRest/ReassignApproval`;
    const urlToCall = ``;
    const response = await axios.post(urlToCall, postData);
    if (response.STATUS.toLowerCase() === 'success') {
        return postData;
    } else if (response.STATUS.toLowerCase() === 'error') {
        throw Object.assign(
            new Error(response.STATUS_MESSAGE),
            { code: 402 }
        );
    } else {
        throw Object.assign(
            new Error('Issue in save API'),
            { code: 402 }
        );
    }
})


const initialState = {
    approvalList: [],
    rules: [],
    editObj: null,
    actionType: 'CREATE'
};

const delegationRuleSlice = createSlice({
    name: 'app-delegation-rules',
    initialState: initialState,
    reducers: {
        updateActionType(state, action) {
            state.actionType = action.payload.value
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchRules.fulfilled, (state, action) => {
            state.rules = action.payload;
        }).addCase(fetchItemsType.fulfilled, (state, action) => {
            state.approvalList = action.payload
        }).addCase(removeRule.fulfilled, (state, action) => {
            const ruleId = action.payload.RULE_ID;
            const filteredRules = state.rules.filter((current) => current.RULE_ID !== ruleId);
            state.rules = filteredRules;
        })
    }
});

export const delegationRulesActions = delegationRuleSlice.actions;
export default delegationRuleSlice.reducer;
export const selectAllRules = state => state.rules.rules;