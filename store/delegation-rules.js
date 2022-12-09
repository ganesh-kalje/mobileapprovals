import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';





export const fetchRules = createAsyncThunk('post/fetchRules', async (loggedInNTID) => {
    const urlToCallRules = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/rules.json`;
    const postObjRules = {NTID: ''};
    const response = await axios.get(urlToCallRules);
    console.log(response.data);
    return (response.data.STATUS.toLowerCase() === 'success' && response.data.ApprovalReportOutput) ? response.data.ApprovalReportOutput : [];
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
            console.log('fetch data')
            console.log(state, action);
            state.rules = action.payload;
        })
    }
});

export const delegationRulesActions = delegationRuleSlice.actions;
export default delegationRuleSlice.reducer;
export const selectAllRules = state => state.rules;