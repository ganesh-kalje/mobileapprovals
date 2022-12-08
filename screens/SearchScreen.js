import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { searchScreenStyle } from '../styles/global';


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


const SearchScreen = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);



    return (<>

        <View style={searchScreenStyle.container}>
            <Text style={searchScreenStyle.label}>Approval Type:</Text>
            <Dropdown
                style={[searchScreenStyle.dropdown, isFocus && { borderColor: '#2b9cd8' }]}
                itemTextStyle={{ fontSize: 14 }}
                placeholderStyle={searchScreenStyle.placeholderStyle}
                selectedTextStyle={searchScreenStyle.selectedTextStyle}
                iconStyle={searchScreenStyle.iconStyle}
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

        <View style={searchScreenStyle.container}>
            <Text style={searchScreenStyle.label}>Search By</Text>
            <Dropdown
                style={[searchScreenStyle.dropdown, isFocus && { borderColor: '#2b9cd8' }]}
                itemTextStyle={{ fontSize: 14 }}
                placeholderStyle={searchScreenStyle.placeholderStyle}
                selectedTextStyle={searchScreenStyle.selectedTextStyle}
                iconStyle={searchScreenStyle.iconStyle}
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

        <View style={searchScreenStyle.container}>
            <Text style={searchScreenStyle.label}>Enter Search Keyword:</Text>
            <TextInput style={searchScreenStyle.textInput} />
        </View>

        <View style={{ marginBottom: 10, alignItems: 'center' }}>
            <Pressable style={searchScreenStyle.buttonContainer}>
                <Text style={searchScreenStyle.buttonStlye}>Submit</Text>
            </Pressable>
        </View>

    </>
    );
}
export default SearchScreen;