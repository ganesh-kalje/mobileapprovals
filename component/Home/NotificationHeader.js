import { View, Text, StyleSheet} from "react-native";
const NotificationHeader = () => {
    return (<>
        <Text style={styles.mainHeader}>INV44525</Text>
        <Text style={styles.descriptionSpan}>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,</Text>
        <View style={styles.separator}></View>
    </>)
}
const styles = StyleSheet.create({
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
});
export default NotificationHeader;
