import AsyncStorage from '@react-native-async-storage/async-storage';
const StorageHelper = {
    removeDataByKey: async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    },
    getData: async (key) => JSON.parse(await AsyncStorage.getItem(key)),
    
    /**getData: async (key) => {
        try {
            const userData = JSON.parse(await AsyncStorage.getItem(key));
            console.log(userData);
        } catch (error) {
            console.log(error);
        }
    },**/
    storeData: async (key, data) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    }
}

export default StorageHelper;