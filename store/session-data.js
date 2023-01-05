import { createSlice } from "@reduxjs/toolkit";

const initialSessionDataState = {
    selectedSearchUser: null
}

const sessionDataSlice = createSlice({
    name: 'sessionData',
    initialState: initialSessionDataState,
    reducers: {
        saveSelectedUser(state, action) {
            state.selectedSearchUser = action.payload;
        },
        clearSelectedUser(state, action) {
            state.selectedSearchUser = null;
        }
    }
});

export const sessionDataActions = sessionDataSlice.actions;
export default sessionDataSlice.reducer;