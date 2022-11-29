import { Text, View, StyleSheet, Pressable, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";

const Filter = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const [filterOptionEnabled, setFilterOptionEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleFilterOption = () => setFilterOptionEnabled(filterOptionEnabled => !filterOptionEnabled);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.label}>Current Filter : </Text>
                    <Text style={styles.ValueLable}>Actionable</Text>
                </View>

                <View style={styles.filterSpan}>
                    <Pressable onPress={toggleFilterOption}>
                        <Text style={styles.ValueLable}>
                            Filter { filterOptionEnabled ? <AntDesign name="down" size={10} color="#fff" /> : <AntDesign name="right" size={10} color="#fff" />}
                        </Text>
                    </Pressable>
                </View>
            </View>

            {filterOptionEnabled && <View style={styles.filterOptContainer}>
                <View style={styles.filterOption}>
                    <Text style={styles.ValueLable}>All</Text>

                    <Switch trackColor={{ false: "#2b9cd8", true: "#fff" }}
                        thumbColor={true ? "#2b9cd8" : "#fff"} value={true} />
                </View>

                <View style={styles.filterOption}>
                    <Text style={styles.ValueLable}>Actionable</Text>

                    <Switch
                        trackColor={{ false: "#7CD468", true: "#7CD468" }}
                        thumbColor={'#fff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={styles.filterOption}>
                    <Text style={styles.ValueLable}>FYI</Text>
                    <Switch trackColor={{ false: "#2b9cd8", true: "#fff" }}
                        thumbColor={true ? "#2b9cd8" : "#fff"} value={true} />
                </View>
            </View>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#0272B6',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        justifyContent: "space-between"
    },
    center: {
        flexDirection: 'row',
    },
    label: {
        color: '#fff',
        fontSize: 12,
        marginRight: 10,
        fontWeight: '200',
        alignItems: "center",
    },
    ValueLable: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
        alignItems: "center",

    },
    filterSpan: {
        marginRight: 20
    },
    filterOptContainer: {
        backgroundColor: '#00619a',
        padding: 10

    },
    filterOption: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    }
});

export default Filter;