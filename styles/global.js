import { StyleSheet } from 'react-native';
import {containerStyle, uiComponentStyle} from './container';
import { Dimensions, TouchableHighlight, Text } from 'react-native';

export const searchScreenStyle = StyleSheet.create({
    container: {
        padding: 10,
    },
    dropdown: uiComponentStyle.dropDown.dropdown,
    icon: uiComponentStyle.dropDown.dropdown,
    placeholderStyle: uiComponentStyle.dropDown.placeholderStyle,
    selectedTextStyle: uiComponentStyle.dropDown.selectedTextStyle,
    iconStyle: uiComponentStyle.dropDown.iconStyle,
    inputSearchStyle: uiComponentStyle.dropDown.inputSearchStyle,
    label: uiComponentStyle.label,
    buttonContainer: uiComponentStyle.button.buttonContainer,
    buttonStlye: uiComponentStyle.button.buttonStlye,
    textInput: uiComponentStyle.textInput,
});

export const reportScreenStyle = StyleSheet.create({
    container: {
        padding: 10,
    },
    dropdown: uiComponentStyle.dropDown.dropdown,
    icon: uiComponentStyle.dropDown.dropdown,
    placeholderStyle: uiComponentStyle.dropDown.placeholderStyle,
    selectedTextStyle: uiComponentStyle.dropDown.selectedTextStyle,
    iconStyle: uiComponentStyle.dropDown.iconStyle,
    inputSearchStyle: uiComponentStyle.dropDown.inputSearchStyle,
    label: uiComponentStyle.label,
    buttonContainer: uiComponentStyle.button.buttonContainer,
    buttonStlye: uiComponentStyle.button.buttonStlye,
    textInput: uiComponentStyle.textInput,
});


export const delegationRuleStyle = StyleSheet.create({
    viewRuleScreen: {
        card: containerStyle.cardContainer.card,
        shadowProp: containerStyle.cardContainer.shadowProp,
        listView: {
            flexDirection: 'row',
            alignItems: 'center',
            float: 'left',
            paddingBottom: 10,
        },
        labelStyle: containerStyle.cardContainer.labelStyle,
        valueStyle: containerStyle.cardContainer.valueStyle,
        buttonContainer: uiComponentStyle.button.buttonContainer,
        buttonStlye: uiComponentStyle.button.buttonStlye,
    },
    createRuleScreen: {
        container: {
            padding: 20
        },
        textInput: uiComponentStyle.textInput,
        textArea: uiComponentStyle.textArea,
        label: uiComponentStyle.label,
        buttonContainer: uiComponentStyle.button.buttonContainer,
        buttonStlye: uiComponentStyle.button.buttonStlye,
        dropdown: uiComponentStyle.dropDown.dropdown,
        icon: uiComponentStyle.dropDown.dropdown,
        placeholderStyle: uiComponentStyle.dropDown.placeholderStyle,
        selectedTextStyle: uiComponentStyle.dropDown.selectedTextStyle,
        iconStyle: uiComponentStyle.dropDown.iconStyle,
    }
});

export const homeScreenStyle = StyleSheet.create({
    notification: {
        container: {
            flex: 1
        },
        card: containerStyle.cardContainer.card,
        shadowProp: containerStyle.cardContainer.shadowProp,
        styleDivider: {
            backgroundColor: '#2a2c2d',
            height: 1,
            margin: 10,
            width: 50,
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        infoSpan: {
            flexDirection: 'row',
            justifyContent: "space-between",
            paddingBottom: 20
        },
        infoSpanCounter: {
            width: 40.5,
            height: 40.5,
            borderRadius: 20,
            backgroundColor: '#fff',
            borduerColor: '#646a70',
            color: '#646a70',
            borderWidth: 1,
            right: 10,
            top: 19,
            fontSize: 18,
            paddingTop: 5,
            textAlign: 'center',
        },
        infoSpanArrow: {
            width: 32.5,
            height: 32.5,
            color: '#646a70',
            right: 10,
            top: 10,
            fontSize: 18,
            textAlign: 'center',
        }
    },
    pendingActions: {
        filterContainer: {
            padding: 5,
            backgroundColor: '#0272B6'
        },
        input: {
            height: 40,
            margin: 12,
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 3,
            border: 'none'
        },
        listContainer: {
            flexDirection: 'row'
        },
        cardWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'stretch',
        },
        card: containerStyle.cardContainer.card,
        shadowProp: containerStyle.cardContainer.shadowProp,
        descriptionSpan: {
            color: '#2a2a2a',
            fontSize: 12,
            fontWeight: '400',
        },
        infoSpanCounter: {
            width: 40.5,
            height: 40.5,
            borderRadius: 20,
            borderWidth: 1,
            marginLeft: 15,
            marginRight: 15,
            backgroundColor: '#2B9CD8',
            borderColor: '#646a70',
            textContent: {
                fontSize: 18,
                color: '#fff',
                textAlign: 'center',
                paddingTop: 8
            }
        },
        headerSpan: {
            color: '#00619a',
            fontWeight: '400',
            fontSize: 16,
            paddingBottom: 3,
            marginTop: -4
        }
    },
    notificationDetails: {
        card: containerStyle.cardContainer.card,
        shadowProp: containerStyle.cardContainer.shadowProp,
        mainHeader: {
            color: '#1f6f9a',
            fontSize: 16,
            fontWeight: '500'
        },
        descriptionSpan: {
            color: '#2a2a2a',
            fontSize: 12,
            paddingTop: 10,
            paddingBottom: 10
        },
        separator: containerStyle.cardContainer.separator,
        actionLink: {
            flexDirection: 'row',
            justifyContent: "space-between",
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderColor: '#dde3e6'
        },
        actionLinkText: {
            color: '#2b9cd8',
            fontWeight: '500'
        },
        arrowIcon: {
            top: 0,
            fontWeight: 'bold',
            fontSize: 18
        }
    },
    lineScreen: {
        card: containerStyle.cardContainer.card,
        shadowProp: containerStyle.cardContainer.shadowProp,
        labelStyle: containerStyle.cardContainer.labelStyle,
        valueStyle: containerStyle.cardContainer.valueStyle,
        separator: containerStyle.cardContainer.separator,
        row: containerStyle.cardContainer.row,
        boxItem: containerStyle.cardContainer.boxItem,
    },
    actionHistoryScreen: {
        card: containerStyle.cardContainer.card,
        shadowProp: containerStyle.cardContainer.shadowProp,
        separator: containerStyle.cardContainer.separator,
        labelStyle: containerStyle.cardContainer.labelStyle,
        valueStyle: containerStyle.cardContainer.valueStyle,
        row: containerStyle.cardContainer.row,
        boxItem: containerStyle.cardContainer.boxItem,
    },
    attachmentsScreen: {
        nameContainer: {
            backgroundColor: '#ebeef0',
            padding: 10,
            margin: 10
        },
        labeValue: {
            color: '#00619a',
            fontWeight: '500',
            fontSize: 15
        }
    },
    actionScren: {
        bottomContainer: {
            flex: 1,
            justifyContent: 'flex-end',
        },
        actionIcon: {
            height: 18,
            width: 18,
            marginTop: 3,
            marginRight: 2
        },
        button: {
            fontSize: 15,
            fontWeight: '300'
        },
        btnApr: {
            color: '#47c684',
        },
        btnRjt: {
            color: '#FB5438',
        },
        btnReassing: {
            color: '#1BCFE1',
        },
        btnMoreInfo: {
            color: '#FFA700',
        },
        centeredView: {
            flex: 1,
            marginTop: 35,
        },
        modalView: {
            margin: 10,
            backgroundColor: "#f2f4f5",
            borderRadius: 5,
            padding: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
    
        modalText: {
            marginBottom: 15,
            color: '#00619a',
            fontSize: 14,
            fontWeight: '500'
        },
        textArea: uiComponentStyle.textArea,
        label: {
            color: '#2a2c2d',
            fontSize: 12,
            fontWeight: '400',
            marginBottom: 5
        },
        buttonContainer: {
            marginTop: 20,
            flexDirection: 'row',
        },
        modalButton: {
            width: '50%',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: '#dde2e6',
            paddingTop: 10,
            rightButtonBorder: {
                borderRightWidth: 1,
                borderRightColor: '#dde2e6',
            },
            textStyle: {
                fontWeight: '500',
                color: '#00619a'
            }
        }
    },
    filterSection: {
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
            marginBottom: 20
        }
    },
    notificationHeaderSection: {
        mainHeader: {
            color: '#1f6f9a',
            fontSize: 16,
            fontWeight: '500'
        },
        descriptionSpan: {
            color: '#2a2a2a',
            fontSize: 12,
            paddingTop: 10,
            paddingBottom: 10
        },
        separator: {
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderColor: '#dde3e6'
        }
    }
})