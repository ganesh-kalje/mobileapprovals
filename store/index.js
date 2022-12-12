import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import delegationRulesReducer from './delegation-rules';

const store = configureStore({
    reducer: {
        auth: authReducer,
        rules: delegationRulesReducer,
    }
});
export default store; 