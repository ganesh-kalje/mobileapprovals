import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import api from '../environment/api';

/**
 * Get state of service list
 */
export const fetchStateOfService = createAsyncThunk('posts/fetchStateOfService', async (loggedInNTID) => {
  const stateOfServiceUrl = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetStateOfService.json`;

  // const stateOfServiceUrl = `${api.getAPIEndPoint()}CIFANotificationDetails/CIFANotificationDetailsRest/GetStateOfServices`;
  // const response = await axios.post(stateOfServiceUrl, {USER_NAME: loggedInNTID});
  const response = await axios.get(stateOfServiceUrl);
  return (response.STATUS.toLowerCase() === 'success' && response.Getstateofservicesoutput) ? response.Getstateofservicesoutput : [];
});

const stateOfServiceSlice = createSlice({
    name: 'state-of-service',
    initialState: { statesOfService: [] },
    reducers: {
      
    },
    extraReducers(builder) {
      builder.addCase(fetchStateOfService.fulfilled, (state, action) => {
        state.statesOfService = action.payload;
      })
    }
  });
  export const stateOfServiceActions = stateOfServiceSlice.actions;
  export default stateOfServiceSlice.reducer;