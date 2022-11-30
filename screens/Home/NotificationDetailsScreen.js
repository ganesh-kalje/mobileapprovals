import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const NotificationDetailsScreen = () => {
    return <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.mainHeader}>INV44525</Text>
        <Text style={styles.descriptionSpan}>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,</Text>
        <View style={styles.separator}></View>

        <View style={{ paddingTop: 5, borderBottomWidth: 1, borderColor: '#dde3e6' }}>
            <Text style={styles.mainHeader}>INV44525</Text>
            <Text style={styles.descriptionSpan}>GX5PORTAL</Text>
            <Text style={styles.mainHeader}>Amount</Text>
            <Text style={styles.descriptionSpan}>5.025.00</Text>
            <Text style={styles.mainHeader}>Supplier</Text>
            <Text style={styles.descriptionSpan}>TECH SYSTEM INC</Text>
            <Text style={styles.mainHeader}>Invoice Date</Text>
            <Text style={styles.descriptionSpan}>02-Sep-2022</Text>
        </View>

        <View style={styles.actionLink}>
            <Text style={styles.actionLinkText}>Lines</Text>
            <AntDesign style={styles.arrowIcon} name="right" size={15} color="#2b9cd8" />
        </View>
        <View style={styles.actionLink}>
            <Text style={styles.actionLinkText}>Action History</Text>
            <AntDesign style={styles.arrowIcon} name="right" size={15} color="#2b9cd8" />
        </View>
        <View style={styles.actionLink}>
            <Text style={styles.actionLinkText}>Attachments</Text>
            <AntDesign style={styles.arrowIcon} name="right" size={15} color="#2b9cd8" />
        </View>

        <View style={styles.bottomContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Pressable android_ripple={styles.btnApr} onPress={() => { }} style={{ flexDirection: 'row'}}>
                    <Image source={require('./../../assets/images/approved_1.png')}
                        fadeDuration={0} style={styles.actionIcon}></Image>
                    <Text style={[styles.button, styles.btnApr]}>Approve</Text>
                </Pressable>

                <Pressable android_ripple={styles.btnRjt} onPress={() => { }} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/reject_1.png')}
                        fadeDuration={0} style={styles.actionIcon}></Image>
                    <Text style={[styles.button, styles.btnRjt]}>Reject</Text>
                </Pressable>

                <Pressable android_ripple={styles.btnReassing} onPress={() => { }} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/Reass.png')}
                        fadeDuration={0} style={styles.actionIcon}></Image>
                    <Text style={[styles.button, styles.btnReassing]}>Reassign</Text>
                </Pressable>

                <Pressable android_ripple={styles.btnMoreInfo} onPress={() => { }} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/More_1.png')}
                        fadeDuration={0} style={styles.actionIcon}></Image>
                    <Text style={[styles.button, styles.btnMoreInfo]}>More Info</Text>
                </Pressable>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
    },
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
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    actionIcon: {
        height: 20, 
        width: 20,
        marginRight: 5,
        marginLeft: 10
    },
    button: {
        fontWeight: '500',
        fontSize: 13
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
    }
    


   
});
export default NotificationDetailsScreen;