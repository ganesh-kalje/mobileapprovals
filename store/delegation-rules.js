import { createSlice } from "@reduxjs/toolkit";
import { axios } from "axios";

const initialState = {
    approvalList: [],
    rules: [],
    editObj: null
};

const delegationRuleSlice = createSlice({
    name: 'app-delegation-rules',
    initialState: initialState,
    reducers: {

    }
});

export const delegationRulesActions = delegationRuleSlice.actions;
export default delegationRuleSlice.reducer;
export const selectAllRules = state => state.rules;