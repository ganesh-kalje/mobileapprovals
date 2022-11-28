import { Text, View, Button, StyleSheet  } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>This is the home screen</Text>
            <Button title="Go to Report Screen"  onPress={() => navigation.navigate("Report")}  />
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default HomeScreen;