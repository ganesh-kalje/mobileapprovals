import React, { useEffect, useState } from 'react';
import { FlatList,  Text, View, SafeAreaView } from 'react-native';
import { homeScreenStyle } from '../../../styles/global';
const LinePropertiesCar = (props) => {
    const approvalDetails = props.approvalDetails;
    const lookupCode = props.LOOKUP_CODE;

    const [dataMappingCar, setDataMapping] = useState([]);
    const dataMapping = [];
    const removeDash = (str) => (str.indexOf('_') !== -1) ? str.replace(/_/g, " ") : str;
    

    const addMoreLess = (str) => {
        const showChar = 250;
        const content = str;
        if ((str !== undefined && str !== null)) {
            return str;
        }
        const ellipsestext = "...";
        const moretext = "more";
        // let html = "";

        var c = content.substr(0, showChar);
        var h = content.substr(showChar - 1, content.length - showChar);
        return c + '<span className="moreellipses">' + ellipsestext + '&nbsp;</span><span className="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a className="morelink">' + moretext + '</a></span>';
    }

    const getCarHtml = (json_i, i) => {
       
        if (json_i instanceof Object) {
            for (var j in json_i) {
                if (!Array.isArray(json_i)) {
                    if (j.startsWith("_")) continue; // No need to display values starting with _ 
                    if (typeof (json_i[j]) === 'object') continue;
                    dataMapping.push({ key: j, value: json_i[j] });
                    // dataMapping.set(j, json_i[j]);
                }
            }
        } else {
            if (!i.startsWith("_")) {
                if (json_i !== undefined && json_i !== null) {
                    dataMapping.push({ key: i, value: json_i });
                }
            }
        }
    }
    

    useEffect(() => {
        if (approvalDetails) {
            for (var i in approvalDetails) {
                
                if (i !== "TRANSACTION_LINE") {
                    if (lookupCode === "APEXP" || lookupCode === "XXCMSTOC" || lookupCode === "XXCMSTRA") {
                        getCarHtml(approvalDetails[i], i)
                    } else {
                        if (i.startsWith("_")) {
                            getCarHtml(approvalDetails[i], i)
                        }
                    }
                }
            }
            setDataMapping(dataMapping)
        }

    }, [approvalDetails, lookupCode])

    const renderItem = ({ item }) => (
        <>
            <Text style={homeScreenStyle.notificationDetails.mainHeader}>{removeDash(item.key)}</Text>
            <Text style={homeScreenStyle.notificationDetails.descriptionSpan}>{item.value}</Text>
        </>
    );
    


    return <>
    
        <SafeAreaView style={[{ paddingTop: 5, borderBottomWidth: 1, borderColor: '#dde3e6' }, { flex: 1 }]}>
            <FlatList data={dataMappingCar} renderItem={renderItem} keyExtractor={item => item.key} />
        </SafeAreaView>
    </>


}
export default LinePropertiesCar;