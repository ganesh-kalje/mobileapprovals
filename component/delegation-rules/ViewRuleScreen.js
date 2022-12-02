import { Text, View, Button, StyleSheet, Pressable } from 'react-native';

const ViewRuleScreen = () => {
    return (<>
        <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.listView}>
                <Text style={styles.labelStyle}>Rule Name</Text>
                <Text style={styles.valueStyle}>Delegate: ARORA, MEENAKSHI</Text>
            </View>

            <View style={styles.listView}>
                <Text style={styles.labelStyle}>Item Type</Text>
                <Text style={styles.valueStyle}>Change Request(s)</Text>
            </View>

            <View style={styles.listView}>
                <Text style={styles.labelStyle}>Start Date</Text>
                <Text style={styles.valueStyle}>11-Oct-2022</Text>
            </View>

            <View style={styles.listView}>
                <Text style={styles.labelStyle}>End Date</Text>
                <Text style={styles.valueStyle}>15-Oct-2022</Text>
            </View>

            <View style={styles.listView}>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Edit</Text>
                </Pressable>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Delete</Text>
                </Pressable>

            </View>
        </View>

        <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.listView}>
                <Text style={styles.labelStyle}>Rule Name</Text>
                <Text style={styles.valueStyle}>Delegate: ARORA, MEENAKSHI</Text>
            </View>

            <View style={styles.listView}>
                <Text style={styles.labelStyle}>Item Type</Text>
                <Text style={styles.valueStyle}>Change Request(s)</Text>
            </View>

            <View style={styles.listView}>
                <Text style={styles.labelStyle}>Start Date</Text>
                <Text style={styles.valueStyle}>11-Oct-2022</Text>
            </View>

            <View style={styles.listView}>
                <Text style={styles.labelStyle}>End Date</Text>
                <Text style={styles.valueStyle}>15-Oct-2022</Text>
            </View>

            <View style={styles.listView}>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Edit</Text>
                </Pressable>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Delete</Text>
                </Pressable>

            </View>
        </View>
    </>);
}

const styles = StyleSheet.create({
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
    listView: {
        flexDirection: 'row',
        alignItems: 'center',
        float: 'left',
        paddingBottom: 10,
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
        width: '40%'
    },
    buttonStlye: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
});
export default ViewRuleScreen;