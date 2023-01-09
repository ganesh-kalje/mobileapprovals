import axios from "axios";
import { useEffect, useState } from "react";
import {
    Text,
    View,
    FlatList,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    PermissionsAndroid,
    SafeAreaView,
} from 'react-native';
import { useSelector } from "react-redux";
import { homeScreenStyle } from '../../styles/global';
import * as FileSystem from 'expo-file-system';

import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


// import RNFetchBlob from 'rn-fetch-blob';

const AttachmentScreen = ({ route, navigation }) => {
    const loggedInNTID = useSelector((state) => state.auth.loggedInNTID);
    const { NOTIFICATION_ID, LOOKUP_CODE } = (route.params !== null) ? route.params : {};
    const [attachmentItemList, setAttachmentItemList] = useState([]);
    const fileUrl = 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg';

    const checkPermission = async () => {
        // Function to check the platform
        // If Platform is Android then check for permissions.
        if (Platform.OS === 'ios') {
            downloadFile();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'Application needs access to your storage to download File',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // Start downloading
                    downloadFile();
                    console.log('Storage Permission Granted.');
                } else {
                    // If permission denied then show alert
                    Alert.alert('Error', 'Storage Permission Not Granted');
                }
            } catch (err) {
                // To handle permission related exception
                console.log("++++" + err);
            }
        }
    };

    /**const checkPermission = async () => {
        // Function to check the platform
        // If Platform is Android then check for permissions.
        if (Platform.OS === 'ios') {
            downloadFile();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'Application needs access to your storage to download File',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // Start downloading
                    downloadFile();
                    console.log('Storage Permission Granted.');
                } else {
                    // If permission denied then show alert
                    Alert.alert('Error', 'Storage Permission Not Granted');
                }
            } catch (err) {
                // To handle permission related exception
                console.log("++++" + err);
            }
        }
    };

    const getFileExtention = fileUrl => {
        // To get the file extension
        return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
    };

    const downloadFile = (fileUrl) => {

        // Get today's date to add the time suffix in filename
        let date = new Date();
        // File URL which we want to download
        let FILE_URL = fileUrl;
        // Function to get extention of the file url
        let file_ext = getFileExtention(FILE_URL);

        file_ext = '.' + file_ext[0];

        // config: To get response by passing the downloading related options
        // fs: Root directory path to download
        const { config, fs } = RNFetchBlob;
        let RootDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path:
                    RootDir +
                    '/file_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    file_ext,
                description: 'downloading file...',
                notification: true,
                // useDownloadManager works with Android only
                useDownloadManager: true,
            },
        };
        config(options)
            .fetch('GET', FILE_URL)
            .then(res => {
                // Alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                alert('File Downloaded Successfully.');
            });
    };**/

    const downloadFile = async () => {
        const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (perm.status != 'granted') {
            return;
        }

        try {
            const fileUri = `${FileSystem.documentDirectory}${fileUrl}`;
            const downloadedFile = await FileSystem.downloadAsync(uri, fileUri);

            if (downloadedFile.status != 200) {
                handleError();
            }

            const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
            const album = await MediaLibrary.getAlbumAsync('Download');
            if (album == null) {
                await MediaLibrary.createAlbumAsync('Download', asset, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            }
        } catch (e) {
            handleError(e);
        }

        /**const fileUri = `${FileSystem.documentDirectory}${fileUrl}`;
        const downloadedFile = await FileSystem.downloadAsync(uri, fileUri);

        if (downloadedFile.status != 200) {
            handleError();
        }**/
    }


    useEffect(() => {
        downloadFile()
        if (NOTIFICATION_ID) {
            // const urlToCall = `${api.getAPIEndPoint()}CIFANotificationDetails/CIFANotificationDetailsRest/GetAttachmentDetails`;
            const urlToCall = `https://mobile-approval-a77da-default-rtdb.firebaseio.com/GetAttachmentDetails.json`;
            const requestInput = { NOTIFICATION_ID: NOTIFICATION_ID };
            /**axios.post(urlToCall, requestInput).then(apiResponse => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.AttachmentDetailsOutput) {
                    setAttachmentItemList(apiResponse.AttachmentDetailsOutput);
                }
            }).catch(error => console.log(error));**/
            axios.get(urlToCall).then(apiResponse => {
                if (apiResponse.STATUS.toLowerCase() === 'success' && apiResponse.AttachmentDetailsOutput) {
                    setAttachmentItemList(apiResponse.AttachmentDetailsOutput);
                }
            }).catch(error => console.log(error));
        }
    }, [NOTIFICATION_ID]);

    const renderItem = ({ item }) => (
        <View style={homeScreenStyle.attachmentsScreen.nameContainer}>
            <Text style={homeScreenStyle.attachmentsScreen.labeValue}>Invoice Image</Text>
        </View>
    );

    return (<View>
        <SafeAreaView>
            <FlatList data={attachmentItemList} renderItem={renderItem} keyExtractor={item => item.FILE_ID} />
        </SafeAreaView>
    </View>)
}
export default AttachmentScreen;