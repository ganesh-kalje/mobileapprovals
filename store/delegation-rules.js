import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchRules = createAsyncThunk('post/fetchRules', async (loggedInNTID) => {
    const urlToCallRules = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/rules.json`;
    const postObjRules = {NTID: loggedInNTID};
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


const initialState = {
    approvalList: [],
    rules: [],
    editObj: null
};

const delegationRuleSlice = createSlice({
    name: 'app-delegation-rules',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchRules.fulfilled, (state, action) => {
            state.rules = action.payload;
        }).addCase(fetchItemsType.fulfilled, (state, action) => {
            state.approvalList = action.payload
        })
    }
});

export const delegationRulesActions = delegationRuleSlice.actions;
export default delegationRuleSlice.reducer;
export const selectAllRules = state => state.rules.rules;