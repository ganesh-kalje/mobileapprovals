import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const RenderCard = () => {
    return <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.infoSpanCounter}>S</Text>
        <View>
            <Text style={styles.headerSpan}>Shiith Ashley</Text>
            <Text style={styles.descriptionSpan}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
            </Text>
        </View>
    </View>
}


const PendingActionScreen = () => {
    const navigate = useNavigation();
    return (<>
        <View style={styles.filterContainer}>
            <TextInput style={styles.input} placeholder="Type here to filter" />
        </View>
        <SafeAreaView>
            <ScrollView>
                <Pressable onPress={() => navigate.navigate("NotificationDetails")}><RenderCard></RenderCard></Pressable>
                <Pressable onPress={() => navigate.navigate("NotificationDetails")}><RenderCard></RenderCard></Pressable>
                <Pressable onPress={() => navigate.navigate("NotificationDetails")}><RenderCard></RenderCard></Pressable>
                <Pressable onPress={() => navigate.navigate("NotificationDetails")}><RenderCard></RenderCard></Pressable>
                <Pressable onPress={() => navigate.navigate("NotificationDetails")}><RenderCard></RenderCard></Pressable>
                <Pressable onPress={() => navigate.navigate("NotificationDetails")}><RenderCard></RenderCard></Pressable>
                
            </ScrollView>
        </SafeAreaView>

    </>)
}
const styles = StyleSheet.create({
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
    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
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
    descriptionSpan: {
        color: '#2a2a2a',
        fontSize: 12,
        fontWeight: '400',
    },
    infoSpanCounter: {
        width: 32.5,
        height: 32.5,
        borderRadius: 50,
        backgroundColor: '#2B9CD8',
        borderColor: '#646a70',
        color: '#fff',
        borderWidth: 1,
        right: 10,
        top: 0,
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    headerSpan: {
        color: '#00619a',
        fontWeight: '400',
        fontSize: 16,
        paddingBottom: 3,
        marginTop: -4
    }
});
export default PendingActionScreen;