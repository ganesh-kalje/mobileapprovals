import { Text, View, Button, StyleSheet } from 'react-native';

const CreateRuleScreen = () => {
    return (
        <View style={[styles.card, styles.shadowProp]} >
            <Text>Settings!</Text>
        </View>
    );
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
});
export default CreateRuleScreen;