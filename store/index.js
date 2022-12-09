import { configureStore } from "@reduxjs/toolkit";
import delegationRulesReducer from './delegation-rules';

const store = configureStore({
    reducer: {
        rules: delegationRulesReducer
    }
});
export default store; 