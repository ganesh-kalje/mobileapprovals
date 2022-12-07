import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
const SearchUserScreen = () => {
    return <View>
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.label}>Name:</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonStlye}>Search</Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.container}>
            <Pressable style={styles.userInfoBox}>
                <Text style={{fontSize: 12, color: '#2a2a2a'}}>MARORA201</Text>
                <Text style={{fontSize: 14, color: '#0254EB'}}>ARRORA, MEENAKSHI</Text>
                <Text style={{fontSize: 12, color: '#2b9cd8'}}>CIFAR12_WF_Dev@cable.comcast.com</Text>
            </Pressable>

            <Pressable style={styles.userInfoBox}>
                <Text style={{fontSize: 12, color: '#2a2a2a'}}>MARORA201</Text>
                <Text style={{fontSize: 14, color: '#0254EB'}}>ARRORA, MEENAKSHI</Text>
                <Text style={{fontSize: 12, color: '#2b9cd8'}}>CIFAR12_WF_Dev@cable.comcast.com</Text>
            </Pressable>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20
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
    label: {
        color: '#2a2c2d',
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 5
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
        width: '40%',
        textAlign: 'center',
    },
    buttonStlye: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    userInfoBox: {
        backgroundColor: '#ebeef0',
        padding: 10,
        marginBottom: 20
    }
});
export default SearchUserScreen;