import React, { useEffect } from "react";
import { View, ScrollView, SafeAreaView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Filter from '../component/Home/Filter';
import NotificationCard from "../component/Home/NotificationCard";
import { fetchStateOfService, fetchNotifications, selectNotification, selectFYIFlag } from "../store/notiications";


const HomeScreen = ({ navigation }) => {
    const fyIFlag = useSelector(selectFYIFlag);
    const notifications = useSelector(selectNotification);
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const dispatch = useDispatch();

    const setFilterData = (filterState) => {
        //A = All, Y = fyi, N = Actionable
        let fyiflag = 'N';
        if(filterState.All) {
            fyiflag = 'A'
        } else if (filterState.Actionable) {
            fyiflag = 'N';
        } else if(filterState.FYI) {
            fyiflag = 'Y'
        }
        dispatch(fetchNotifications({ NTID: loggedInNTID, FYI_FLAG: fyIFlag, SourceSystem: "WORKLIST" }));
    }
    
    useEffect(() => {
        if (notifications === null) {
            dispatch(fetchNotifications({ NTID: loggedInNTID, FYI_FLAG: fyIFlag, SourceSystem: "WORKLIST" }));
        }
        dispatch(fetchStateOfService(loggedInNTID));
    }, [fyIFlag, loggedInNTID, notifications, dispatch])

    const renderItem = ({ item }) => (
        <NotificationCard mapKey={`${item.APPROVAL_TYPE_LOOKUP_CODE.toLowerCase()}`} fyIFlag={fyIFlag} displayCount={`${item.NO_OF_NOTIFICATIONS}`}></NotificationCard>
    );

    return (
        <>
            <Filter setFilterData={setFilterData}></Filter>
            <SafeAreaView>
                <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.APPROVAL_TYPE_LOOKUP_CODE} />
            </SafeAreaView>
        </>
    );
}
export default HomeScreen;