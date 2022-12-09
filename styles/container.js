export const containerStyle = {
    cardContainer: {
        card: {
            padding: 10,
            backgroundColor: '#fff',
            margin: 7.5,
            position: 'relative',
            borderRadius: 6,
            backgroundPosition: 10,
            paddingVertical: 20,
            paddingHorizontal: 20,
            marginVertical: 10
        },
        shadowProp: {
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            shadowColor: '#52006A',
            elevation: 20,
        },
        labelStyle: {
            color: '#00619a',
            fontSize: 12,
            fontWeight: '400',
            width: '30%'
        },
        valueStyle: {
            color: '#000',
            fontSize: 12,
            fontWeight: '400',
            width: '70%',
        },
        separator: {
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderColor: '#dde3e6'
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            float: 'left',
            paddingBottom: 10
        },
        boxItem: {
            elevation: 20,
            backgroundColor: '#f2f4f5',
            marginTop: 10,
            paddingTop: 10,
            paddingRight: 5,
            paddingBottom: 10,
            paddingLeft: 5,
            border: 'none'
        }
    }
}

export const uiComponentStyle = {
    label: {
        color: '#2a2c2d',
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 5
    },
    dropDown: {
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
    },
    button: {
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
    },
    textInput: {
        backgroundColor: '#fff',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 0,
        margin: 0,
        height: 40
    },
    textArea: {
        backgroundColor: '#fff',
        textAlignVertical: 'top',
        border: 1,
        borderColor: '#2b9cd8',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 0,
        margin: 0,
    },
}