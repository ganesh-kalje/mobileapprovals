import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import delegationRulesReducer from './delegation-rules';
import notificationsReducer from './notiications';

const store = configureStore({
    reducer: {
        auth: authReducer,
        rules: delegationRulesReducer,
        notification: notificationsReducer,
    }
});
export default store; 