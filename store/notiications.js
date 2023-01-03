import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { async } from 'q';
// import api from '../environment/api';

/**
 * Get notification details
 */
export const fetchNotifications = createAsyncThunk('posts/fetchNotification', async (postObj) => {
  // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApproval/CIFANotificationApprovalRest/GetApprovalTypesLov`;
  const urlToCall = 'https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetApprovalTypesLov.json';
  const response = await axios.get(urlToCall);
  // const response = await axios.post(urlToCall, postObj);
  return (response.STATUS.toLowerCase() === 'success' && response.ApprovalTypesLovOutput) ? response.ApprovalTypesLovOutput : [];
});

/**
 * Get approval notification list 
 */
export const fetchApprovalList = createAsyncThunk('posts/fetchApprovalList', async (postObj) => {
  // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApproval/CIFANotificationApprovalRest/GetPendingApprovalsList`;
  const urlToCall = 'https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetPendingApprovalList.json';
  const response = await axios.get(urlToCall);
  // const response = await axios.post(urlToCall, postObj);
  return (response.STATUS.toLowerCase() === 'success' && response.PendingApprovalsListOutput) ? response.PendingApprovalsListOutput : [];
});

/**
 * Get approval Details
 */
 export const fetchApprovalDetails = createAsyncThunk('posts/fetchApprovalDetails', async (postObj) => {
  // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationDetails/CIFANotificationDetailsRest/GetNotificationDetails`;
  const urlToCall = 'https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetNotificationDetails.json';
  const response = await axios.get(urlToCall);
  // const response = await axios.post(urlToCall, postObj);
  return (response.STATUS.toLowerCase() === 'success' && response.NotificationDetailsOutput) ? response.NotificationDetailsOutput : [];
});

/**
 * Get RejectionReason list
 */
 export const fetchRejectionReasonList = createAsyncThunk('posts/fetchRejectionReasonList', async (postObj) => {
  // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationApproval/CIFANotificationApprovalRest/GetRejectionReason`;
  const urlToCall = 'https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetRejectionReason.json';
  // const response = await axios.post(urlToCall, postObj);
  const response = await axios.get(urlToCall);
  return (response.STATUS.toLowerCase() === 'success' && response.OutputType) ? response.OutputType : [];
});

/**
 * Get Line recortds 
 */
export const fetchLineRecords = createAsyncThunk('posts/fetchLineRecords', async (postObj) => {
  // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationDetails/CIFANotificationDetailsRest/GetLineDetails`;
  const urlToCall = 'https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetLineDetails.json';
  const response = await axios.get(urlToCall);
 
  // const response = await axios.post(urlToCall, postObj);
  return (response.STATUS.toLowerCase() === 'success' && response.LineDetailsOutput) ? response.LineDetailsOutput : [];
});



const initialAuthState = {
  notifications: null,
  fyIflag: 'N',
  notificationStatus: 'OPEN',
  NTID: '',
  approvalList: [],
  approvalDetails: [],
  lineRecords: [],
  rejectionReason: {lookupCode: '', rejectionReasonList: []}
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: initialAuthState,
  reducers: {
    replaceNotifications(state, action) {
      state.notifications = [...action.payload.fyiItems, ...action.payload.actionableItems, ...action.payload.allItems];
    },
    clearData(state) {
      state =  initialAuthState
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
      state.fyIflag = action.meta.arg.FYI_FLAG;
      state.notificationStatus = state.fyIflag === 'N' ? "OPEN" : "CLOSED";
      state.NTID = action.meta.arg.NTID;
    }).addCase(fetchApprovalList.fulfilled, (state, action) => {
      const approvalList = {lookupCode: action.meta.arg.APPROVAL_TYPE_LOOKUP_CODE, approvalList: action.payload, FYI_FLAG: action.meta.arg.FYI_FLAG};
      state.approvalList.push(approvalList);
    }).addCase(fetchApprovalDetails.fulfilled, (state, action) => {
      state.approvalDetails.push(action.payload[0]);
    }).addCase(fetchRejectionReasonList.fulfilled, (state, action) => {
      state.rejectionReason.lookupCode = (action.meta.arg !== null) ? action.meta.arg.APPROVAL_TYPE_CODE : null;
      state.rejectionReason.rejectionReasonList = action.payload;
    }).addCase(fetchLineRecords.fulfilled, (state, action) => {
      state.lineRecords = action.payload;
    })
  }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;

export const selectNotification = (state) => state.notification.notifications;

export const selectFYIFlag = (state) => state.notification.fyIflag;

export const selectRejectionReason = (state) => state.notification.rejectionReason;



export const selectReportId = createSelector([selectNotification, (selectNotification, category) => category], 
  (notification, category) => {
    const selectedNotification = notification.find((current) => current.APPROVAL_TYPE_LOOKUP_CODE === category);
    return (selectedNotification) ? selectedNotification.ReportID : null;
});

const selectApprovalDetailsList = (state) => state.notification.approvalDetails;
export const selectApprovalDetails = createSelector([selectApprovalDetailsList, (selectApprovalDetailsList, notificationId) => notificationId], 
  (detailList, notificationId) => {
    const selectedApprovalDetails = detailList.find((current) => current && current !== null && current.NOTIFICATION_ID === notificationId);
    return (selectedApprovalDetails) ? selectedApprovalDetails : null;
});

export const selectApprovalList = (state, lookupCode) => {
  return state.notification.approvalList.find((current) => current.lookupCode === lookupCode);
};
