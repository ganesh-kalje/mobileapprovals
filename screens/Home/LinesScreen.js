import { Text, View, StyleSheet } from "react-native"
import NotificationHeader from "../../component/Home/NotificationHeader";
import { AntDesign } from '@expo/vector-icons';

const LinesScreen = () => {
    return (<View style={[styles.card, styles.shadowProp]}>
        <NotificationHeader></NotificationHeader>
        
        <View style={[styles.boxItem]}>
            <View style={{alignItems: 'flex-end'}}>
                <AntDesign name="down" size={20} color="#00619a" />
            </View>
            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Line #</Text>
                <Text style={styles.valueStyle}>1</Text>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Amount</Text>
                <Text style={styles.valueStyle}>4850</Text>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Description</Text>
                <Text style={styles.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>

            <View style={styles.separator}></View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Distribution #</Text>
                <Text style={styles.valueStyle}>1</Text>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>GL Description</Text>
                <Text style={styles.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>
        </View>

        <View style={[styles.boxItem]}>
            <View style={{alignItems: 'flex-end'}}>
                <AntDesign name="down" size={20} color="#00619a" />
            </View>
            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Line #</Text>
                <Text style={styles.valueStyle}>1</Text>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Amount</Text>
                <Text style={styles.valueStyle}>4850</Text>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Description</Text>
                <Text style={styles.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>

            <View style={styles.separator}></View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>Distribution #</Text>
                <Text style={styles.valueStyle}>1</Text>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.labelStyle}>GL Description</Text>
                <Text style={styles.valueStyle}>Typesetting industry. Lorem Ipsum has been the industry's</Text>
            </View>
        </View>
    </View>)
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
})
export default LinesScreen;