import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isLoggedIn: false,
    loggedInNTID : 'gkalje035',
    accessToken: '',
    swithUser: false,
    actualLoggedIn: '',
    userFullname: '',
    userProfileImageUrl: ''
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {

    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;