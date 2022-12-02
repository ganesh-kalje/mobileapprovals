import { View, Text, StyleSheet, Pressable, Image, Modal, TextInput } from "react-native";
import React, { useState } from "react";

const Actions = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (<>
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>APPROVE</Text>
                        <View>
                            <Text style={styles.label}>Comments:</Text>
                            <TextInput multiline={true} style={styles.textArea} numberOfLines={5} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Pressable style={[styles.modalButton, styles.modalButton.rightButtonBorder]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.modalButton.textStyle}>Submit</Text>
                            </Pressable>
                            <Pressable style={[styles.modalButton]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.modalButton.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

        <View style={styles.bottomContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Pressable android_ripple={styles.btnApr} onPress={() => setModalVisible(true)} style={{ flexDirection: 'row' }}>
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
    </>)
}

const styles = StyleSheet.create({
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    actionIcon: {
        height: 18,
        width: 18,
        marginTop: 3,
        marginRight: 2
    },
    button: {
        fontSize: 15,
        fontWeight: '300'
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
    },
    centeredView: {
        flex: 1,
        marginTop: 35,
    },
    modalView: {
        margin: 10,
        backgroundColor: "#f2f4f5",
        borderRadius: 5,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    modalText: {
        marginBottom: 15,
        color: '#00619a',
        fontSize: 14,
        fontWeight: '500'
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
        marginTop: 20,
        flexDirection: 'row',
    },
    modalButton: {
        width: '50%',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#dde2e6',
        paddingTop: 10,
        rightButtonBorder: {
            borderRightWidth: 1,
            borderRightColor: '#dde2e6',
        },
        textStyle: {
            fontWeight: '500',
            color: '#00619a'
        }
    }
});
export default Actions;