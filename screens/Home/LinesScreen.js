import { Pressable, Text, View, FlatList, SafeAreaView } from "react-native"
import NotificationHeader from "../../component/Home/NotificationHeader";
import { AntDesign } from '@expo/vector-icons';
import { homeScreenStyle } from '../../styles/global';
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLineRecords } from "../../store/notiications";
import ListTemplate from "../../component/Home/ListTemplate";


const initialRequest = { PAGE_NUMBER: 1, lines: [], selectedLines: '' };
const reducer = (state, action) => {
    switch (action.type) {
        case "NEXT":
            state.PAGE_NUMBER++;
            return { ...state, PAGE_NUMBER: state.PAGE_NUMBER }
        case "PRE":
            if (state.PAGE_NUMBER > 0) {
                state.PAGE_NUMBER--;
                return { ...state, PAGE_NUMBER: state.PAGE_NUMBER }
            }
        case "LINE":
            return { ...state, lines: action.data }
        default:
            return state;
    }
};

const LinesScreen = ({ route, navigation }) => {
    const [requestState, dispatch] = useReducer(reducer, initialRequest);
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const dispatchLines = useDispatch();
    const lineRecords = useSelector((state) => state.notification.lineRecords);




    const SENDER = route.params.SENDER;
    const SUBJECT = route.params.SUBJECT;
    const FYI_FLAG = route.params.FYI_FLAG;
    const NOTIFICATION_ID = route.params.NOTIFICATION_ID;
    const NOTIFICATION_STATUS = route.params.NOTIFICATION_STATUS;
    const LOOKUP_CODE = route.params.LOOKUP_CODE;
    const header = route.params.header;
    const subHeader = (LOOKUP_CODE === 'CMAPPR') ? NOTIFICATION_ID : '';

    const infoObj = { NOTIFICATION_ID, APPROVAL_TYPE_LOOKUP_CODE: LOOKUP_CODE, NOTIFICATION_STATUS: "OPEN", NTID: loggedInNTID };
    const pageNumber = requestState.PAGE_NUMBER;
    const nextButtonHandler = () => dispatch({ type: "NEXT" });
    const preButtonHandler = () => dispatch({ type: "PRE" });



    React.useEffect(() => {
        if (typeof LOOKUP_CODE !== 'undefined' && typeof NOTIFICATION_ID !== 'undefined') {
            const requestInput = {
                APPROVAL_TYPE_LOOKUP_CODE: LOOKUP_CODE, NOTIFICATION_ID: NOTIFICATION_ID,
                NOTIFICATION_STATUS: NOTIFICATION_STATUS, NTID: loggedInNTID, PAGE_NUMBER: pageNumber
            };
            //console.log(requestInput);
            dispatchLines(fetchLineRecords(requestInput));
        }
    }, [LOOKUP_CODE, NOTIFICATION_ID, loggedInNTID, NOTIFICATION_STATUS, pageNumber]);

    const renderItem = ({ item }) => {
        return <View style={{backgroundColor: '#fff'}}>
            {LOOKUP_CODE === 'APINVAPR' && <ListTemplate infoObj={infoObj} lineDetailObj={item}></ListTemplate>}
            {LOOKUP_CODE === 'REQAPPRV' && <></>}
            {(LOOKUP_CODE === 'POREQCHA' || LOOKUP_CODE === 'PORPOCHA') && <></>}
        </View>
    }


    return (<SafeAreaView style={[homeScreenStyle.lineScreen.card, homeScreenStyle.lineScreen.shadowProp, { flex: 1 }]}>
        <NotificationHeader header={header} subHeader={subHeader} SUBJECT={SUBJECT}  ></NotificationHeader>
        <FlatList data={lineRecords} renderItem={renderItem} keyExtractor={item => item.LINE_NUMBER} />

        {!(requestState.PAGE_NUMBER === 1 && lineRecords.length < 20) && <View style={{ flexDirection: 'row' }}>
            <Pressable disabled={requestState.PAGE_NUMBER === 1} onPress={() => { preButtonHandler() }} style={{ width: '50%', backgroundColor: '#2a2c2d', padding: 10, borderWidth: 0.5, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}>Previous</Text>
            </Pressable>

            <Pressable disabled={requestState.lines.length < 20} onPress={() => { nextButtonHandler() }} style={{ width: '50%', backgroundColor: '#2B9CD8', padding: 10, borderWidth: 0.5, borderTopRightRadius: 20, borderBottomRightRadius: 20, alignItems: 'center' }} >
                <Text style={{ color: '#fff' }}>Next</Text>
            </Pressable>
        </View>}
    </SafeAreaView>)
}

export default LinesScreen;