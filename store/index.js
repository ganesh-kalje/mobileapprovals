import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import delegationRulesReducer from './delegation-rules';
import notificationsReducer from './notiications';
import sessionDataReducer from './session-data';

const store = configureStore({
    reducer: {
        auth: authReducer,
        rules: delegationRulesReducer,
        notification: notificationsReducer,
        sessionData: sessionDataReducer
    }
});
export default store; 