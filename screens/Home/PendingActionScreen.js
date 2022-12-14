import { View, Text, FlatList, TextInput, SafeAreaView, ScrollView, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { homeScreenStyle } from '../../styles/global';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectApprovalList, fetchApprovalList } from "../../store/notiications";

const RenderCard = ({ item }) => {
    return <View style={[homeScreenStyle.pendingActions.card, homeScreenStyle.pendingActions.shadowProp, homeScreenStyle.pendingActions.cardWrapper]}>
        <View style={homeScreenStyle.pendingActions.infoSpanCounter}>
            <Text style={homeScreenStyle.pendingActions.infoSpanCounter.textContent}>{(item.FROM_USER == null) ? "!" : item.FROM_USER.slice(0, 1)}</Text>
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={homeScreenStyle.pendingActions.headerSpan}>{item.FROM_USER}</Text>
            <Text style={homeScreenStyle.pendingActions.descriptionSpan}>{item.SUBJECT}</Text>
        </View>
    </View>
}


const PendingActionScreen = ({ route, navigation }) => {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const APPROVAL_TYPE_LOOKUP_CODE = route.params.APPROVAL_TYPE_LOOKUP_CODE.toUpperCase();
    const approvalListSelector = useSelector((state) => selectApprovalList(state, APPROVAL_TYPE_LOOKUP_CODE));
    const approvalListValue = (approvalListSelector) ? approvalListSelector.approvalList : null;

    const FYI_FLAG = route.params.FYI_FLAG;
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const [approvalList, setApprovalList] = useState([]);
    const [tempApprovalList, setTempApprovalList] = useState([]);
    const approvalDetailsLookup = ['REQAPPRV', 'APINVAPR', 'CMAPPR', 'POREQCHA'];
    const urlLink = (approvalDetailsLookup.includes(APPROVAL_TYPE_LOOKUP_CODE)) ? 'NotificationDetails' : 'NotificationCar';


    const onChangeHandler = (value) => {
        const search = value.toLowerCase();
        const filterData = tempApprovalList.filter((currentObj) => (currentObj.SUBJECT.toLowerCase().includes(search)
            || currentObj.FROM_USER.toLowerCase().includes(search)));

        setApprovalList(filterData);
    }

    useEffect(() => {
        if (approvalListValue === null && APPROVAL_TYPE_LOOKUP_CODE) {
            const dataInput = { NTID: loggedInNTID, APPROVAL_TYPE_LOOKUP_CODE, FYI_FLAG };
            dispatch(fetchApprovalList(dataInput));
        } else {
            setApprovalList(approvalListValue);
            setTempApprovalList(approvalListValue)
        }
    }, [loggedInNTID, APPROVAL_TYPE_LOOKUP_CODE, FYI_FLAG, dispatch, approvalListValue]);

    const renderItem = ({ item }) => {
        const state = {
            LOOKUP_CODE: APPROVAL_TYPE_LOOKUP_CODE, NOTIFICATION_ID: item.NOTIFICATION_ID,
            SENDER: item.FROM_USER, SUBJECT: item.SUBJECT, FYI_FLAG: FYI_FLAG
        };
        return <Pressable onPress={() => navigate.navigate(urlLink, state)}>
            <RenderCard item={item}></RenderCard>
        </Pressable>
    }



    return (<>
        <View style={homeScreenStyle.pendingActions.filterContainer}>
            <TextInput style={homeScreenStyle.pendingActions.input} onChangeText={(event) => onChangeHandler(event)} placeholder="Type here to filter" />
        </View>
        <SafeAreaView>
            <FlatList data={approvalList} renderItem={renderItem} keyExtractor={item => item.NOTIFICATION_ID} />
        </SafeAreaView>

    </>)
}

export default PendingActionScreen;