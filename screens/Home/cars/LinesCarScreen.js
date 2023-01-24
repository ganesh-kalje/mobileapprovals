import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, FlatList } from "react-native";
import NotificationHeader from "../../../component/Home/NotificationHeader";
import { homeScreenStyle } from "../../../styles/global";
import { useNavigation } from '@react-navigation/native';

const LineCarScreen = ({ route, navigation }) => {
    const navigate = useNavigation();
    
    const { SUBJECT, SENDER, linesData, LOOKUP_CODE } = (route.params !== null) ? route.params : {};
    const sortedArray = [];
    for (let i in linesData) {
        sortedArray.push([i, linesData[i]]);
    }
    
    const renderItem = ({ item }) => {
        return <View style={{ backgroundColor: '#fff' }}>
            {typeof item[1] === 'object' && <>
                <Pressable style={{padding: 10}} onPress={() => navigate.navigate("LineListCar", { lineDetails: item, LOOKUP_CODE })}>
                    <Text style={homeScreenStyle.notificationDetails.mainHeader}>
                        {(LOOKUP_CODE === 'XXCMSTRA') ? item[0].RESPONSIBILITY_NAME : item[0].replace(/_/g, ' ')}
                    </Text>
                </Pressable>
            </>}

            {typeof item[1] !== 'object' && !currentObj[0].startsWith("_") && <>
                <Text style={homeScreenStyle.notificationDetails.mainHeader}>{currentObj[0].replace(/_/g, ' ')}</Text>
                <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>{currentObj[1]}</Text>
            </>}
        </View>
    }

    return <>
        <View style={[homeScreenStyle.notificationDetails.card, homeScreenStyle.notificationDetails.shadowProp, { flex: 1 }]}>
            <NotificationHeader header={SENDER} subHeader={''} SUBJECT={SUBJECT}  ></NotificationHeader>
            {linesData && <FlatList data={sortedArray} renderItem={renderItem} keyExtractor={item => item.LINE_NUM} />}
        </View>
    </>
}
export default LineCarScreen;