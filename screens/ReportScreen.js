import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const data = [
    { label: '-Select-', value: '0' },
    { label: 'AP Invoice(s)', value: '1' },
    { label: 'CAR Approval', value: '2' },
    { label: 'Change Request(s)', value: '3' },
    { label: 'Requisitions(s)', value: '4' },
    { label: 'Finsys Access Approval', value: '5' },
    { label: 'Change Management Request(s)', value: '6' }
];

const actioData = [
    { label: '-Select-', value: '0' },
    { label: 'All', value: '1' },
    { label: 'Approved', value: '2' },
    { label: 'Rejected', value: '3' }
];

const dateRangeData = [
    { label: '-Select-', value: '0' },
    { label: 'Past Week', value: '1' },
    { label: 'Past  2 Weeks', value: '2' },
    { label: 'Past 3 Weeks', value: '3' },
    { label: 'Past 4 Weeks', value: '3' }
];




const ReportScreen = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);



    return (<>

        <View style={styles.container}>
            <Text style={styles.label}>Approval Type:</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#2b9cd8' }]}
                itemTextStyle={{ fontSize: 14 }}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '-Select-' : '-Select-'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>

        <View style={styles.container}>
            <Text style={styles.label}>Action Type:</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#2b9cd8' }]}
                itemTextStyle={{ fontSize: 14 }}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={actioData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '-Select-' : '-Select-'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>

        <View style={styles.container}>
            <Text style={styles.label}>Date Range:</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#2b9cd8' }]}
                itemTextStyle={{ fontSize: 14 }}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={dateRangeData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '-Select-' : '-Select-'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>

        <View style={{ marginBottom: 10, alignItems: 'center' }}>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Submit</Text>
                </Pressable>
            </View>

    </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    dropdown: {
        height: 50,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',

    },
    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    label: {
        color: '#2a2c2d',
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 5
    },

    buttonContainer: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#2b9cd8',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        width: '40%',
        textAlign: 'center',
    },
    buttonStlye: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
});


export default ReportScreen;