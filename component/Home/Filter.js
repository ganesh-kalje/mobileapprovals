import { Text, View, Pressable, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { homeScreenStyle } from '../../styles/global';

const Filter = (props) => {
    const [state, setState] = React.useState({
        All: false,
        Actionable: true,
        FYI: false
    });
    const [filterOptionEnabled, setFilterOptionEnabled] = useState(false);

    const toggleSwitch = (switchName) => {
        const isTargetChecked =  !state[switchName];
        if(switchName === 'All') {
            setState(s => ({...s, Actionable: true}));
            setState(s => ({...s, FYI: isTargetChecked ? true : false}));
        } else if (switchName === 'Actionable') {
            if (isTargetChecked && state.FYI) {
                setState(s => ({...s, All: true}));
            } else if(isTargetChecked === false) {
                setState(s => ({...s, FYI: true}));
                setState(s => ({...s, All: false}));
            } else {
                setState(s => ({...s, All: false}));
            }
        } else if (switchName === 'FYI') {
            if (state.Actionable && isTargetChecked) {
                setState(s => ({...s, All: true}));
            } else if(isTargetChecked === false) {
                setState(s => ({...s, Actionable: true}));
                setState(s => ({...s, All: false}));
            } else {
                setState(s => ({...s, All: false}));
            }
        }
        setState(s => ({...s, [switchName]: !s[switchName]}));
        setState(s => {
            props.setFilterData({...s});
            return {...s};
        })
    };

    const getSelectedState = () => {
        if(state.FYI && state.All === false) {
            return 'FYI'
        } else if (state.Actionable && state.All === false) {
            return 'Actionable';
        } else if (state.All) {
            return 'All'
        }
    }

    useEffect(() => {
        
    }, [state])

    const toggleFilterOption = () => setFilterOptionEnabled(filterOptionEnabled => !filterOptionEnabled);

    return (
        <>
            <View style={homeScreenStyle.filterSection.container}>
                <View style={homeScreenStyle.filterSection.center}>
                    <Text style={homeScreenStyle.filterSection.label}>Current Filter : </Text>
                    <Text style={homeScreenStyle.filterSection.ValueLable}>{getSelectedState()}</Text>
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
                    <Switch  
                        trackColor={{ false: "#2b9cd8", true: "#7CD468" }}
                        thumbColor="#fff"
                        ios_backgroundColor="#2b9cd8"
                        onValueChange={() => toggleSwitch('All')}
                        value={state['All']}
                    />
                </View>

                <View style={homeScreenStyle.filterSection.filterOption}>
                    <Text style={homeScreenStyle.filterSection.ValueLable}>Actionable</Text>
                    <Switch
                        trackColor={{ false: "#2b9cd8", true: "#7CD468" }}
                        thumbColor="#fff"
                        ios_backgroundColor="#2b9cd8"
                        onValueChange={() => toggleSwitch('Actionable')}
                        value={state['Actionable']}
                    />
                </View>

                <View style={homeScreenStyle.filterSection.filterOption}>
                    <Text style={homeScreenStyle.filterSection.ValueLable}>FYI</Text>
                    <Switch 
                        trackColor={{ false: "#2b9cd8", true: "#7CD468" }}
                        thumbColor="#fff"
                        ios_backgroundColor="#2b9cd8"
                        onValueChange={() => toggleSwitch('FYI')}
                        value={state['FYI']}
                    />
                </View>
            </View>}
        </>
    );
}
export default Filter;