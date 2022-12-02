import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
    const navigate = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View style={[styles.imageContainer, { marginBottom: 0, paddingBottom: 0 }]}>
                    <Image style={styles.imageContainer.imageSpan} size={25} source={require('../../assets/images/logo.png')}></Image>
                </View>
                <View style={[styles.profileInfo]}>
                    <Text style={styles.profileInfo.profileText}>Ganesh Kalje</Text>
                    <Text style={[styles.profileInfo.profileText, { fontSize: 12 }]}>NTID: GKALJE035</Text>
                </View>
            </View>
            <DrawerItemList {...props} />

            <DrawerItem style={[styles.drawerItem, {borderTopWidth: 1, borderTopColor: '#fff'}]} labelStyle={styles.drawerItem.labelStyle}
                label="CopyRight & Privacy" icon={() => <Image source={require('../../assets/images/copyright_icon_active.png')}
                    fadeDuration={0} style={{ width: 20, height: 20, margin: 0, padding: 0 }} />} onPress={() => {}} />
            
            <DrawerItem style={styles.drawerItem} labelStyle={styles.drawerItem.labelStyle}
                label="Help" icon={() => <Image source={require('../../assets/images/help_icon_active.png')}
                fadeDuration={0} style={{ width: 20, height: 20, margin: 0, padding: 0 }} />} onPress={() => {}} />

            <DrawerItem style={styles.drawerItem} labelStyle={styles.drawerItem.labelStyle}
                label="Logout" icon={() => <Image source={require('../../assets/images/Logout_icon_active.png')}
                fadeDuration={0} style={{ width: 20, height: 20, margin: 0, padding: 0 }} />} onPress={() => {}} />

            <View style={styles.imageContainer}>
                <Image style={styles.imageContainer.imageSpan} size={25} source={require('../../assets/images/logo.png')}></Image>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        margin: 0,
        padding: 0,
        labelStyle: {
            color: '#fff',

            margin: 0,
            padding: 0
        }
    },
    profileInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
        profileText: {
            fontSize: 20,
            color: '#fff',
            marginBottom: 5
        }
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 25,
        padding: 25,
        imageSpan: {
            width: 130,
            height: 100,
        }
    }
});
export default CustomDrawerContent;