import { Text, View, StyleSheet } from "react-native"

const AttachmentScreen = () => {
    return (<View>
        <View style={styles.nameContainer}>
            <Text style={styles.labeValue}>Invoice Image</Text>
        </View>
    </View>)
}


const styles = StyleSheet.create({
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
})


export default AttachmentScreen;