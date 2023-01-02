import { Text, View, Pressable, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { homeScreenStyle } from '../../styles/global';

const Filter = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const [filterOptionEnabled, setFilterOptionEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleFilterOption = () => setFilterOptionEnabled(filterOptionEnabled => !filterOptionEnabled);

    return (
        <>
            <View style={homeScreenStyle.filterSection.container}>
                <View style={homeScreenStyle.filterSection.center}>
                    <Text style={homeScreenStyle.filterSection.label}>Current Filter : </Text>
                    <Text style={homeScreenStyle.filterSection.ValueLable}>Actionable</Text>
                </View>

                <View style={homeScreenStyle.filterSection.filterSpan}>
                    <Pressable onPress={toggleFilterOption}>
                        <Text style={homeScreenStyle.filterSection.ValueLable}>
                            Filter { filterOptionEnabled ? <AntDesign name="down" size={10} color="#fff" /> : <AntDesign name="right" size={10} color="#fff" />}
                        </Text>
                    </Pressable>
                </View>
            </View>

            {filterOptionEnabled && <View style={homeScreenStyle.filterSection.filterOptContainer}>
                <View style={homeScreenStyle.filterSection.filterOption}>
                    <Text style={homeScreenStyle.filterSection.ValueLable}>All</Text>

                    <Switch  trackColor={{ false: "#2b9cd8", true: "#fff" }}
                        thumbColor={true ? "#2b9cd8" : "#fff"} value={true} />
                </View>

                <View style={homeScreenStyle.filterSection.filterOption}>
                    <Text style={homeScreenStyle.filterSection.ValueLable}>Actionable</Text>

                    <Switch
                        trackColor={{ false: "#7CD468", true: "#7CD468" }}
                        thumbColor={'#fff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={homeScreenStyle.filterSection.filterOption}>
                    <Text style={homeScreenStyle.filterSection.ValueLable}>FYI</Text>
                    <Switch trackColor={{ false: "#2b9cd8", true: "#fff" }}
                        thumbColor={true ? "#2b9cd8" : "#fff"} value={true} />
                </View>
            </View>}
        </>
    );
}
export default Filter;