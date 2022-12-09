import { View, Text, Pressable, Image, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { homeScreenStyle } from '../../styles/global';

const Actions = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (<>
        <View style={homeScreenStyle.actionScren.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }} >
                <View style={homeScreenStyle.actionScren.centeredView}>
                    <View style={homeScreenStyle.actionScren.modalView}>
                        <Text style={homeScreenStyle.actionScren.modalText}>APPROVE</Text>
                        <View>
                            <Text style={homeScreenStyle.actionScren.label}>Comments:</Text>
                            <TextInput multiline={true} style={homeScreenStyle.actionScren.textArea} numberOfLines={5} />
                        </View>
                        <View style={homeScreenStyle.actionScren.buttonContainer}>
                            <Pressable style={[homeScreenStyle.actionScren.modalButton, homeScreenStyle.actionScren.modalButton.rightButtonBorder]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={homeScreenStyle.actionScren.modalButton.textStyle}>Submit</Text>
                            </Pressable>
                            <Pressable style={[homeScreenStyle.actionScren.modalButton]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={homeScreenStyle.actionScren.modalButton.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

        <View style={homeScreenStyle.actionScren.bottomContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Pressable android_ripple={homeScreenStyle.actionScren.btnApr} onPress={() => setModalVisible(true)} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/approved_1.png')}
                        fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                    <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnApr]}>Approve</Text>
                </Pressable>

                <Pressable android_ripple={homeScreenStyle.actionScren.btnRjt} onPress={() => { }} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/reject_1.png')}
                        fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                    <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnRjt]}>Reject</Text>
                </Pressable>

                <Pressable android_ripple={homeScreenStyle.actionScren.btnReassing} onPress={() => { }} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/Reass.png')}
                        fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                    <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnReassing]}>Reassign</Text>
                </Pressable>

                <Pressable android_ripple={homeScreenStyle.actionScren.btnMoreInfo} onPress={() => { }} style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/More_1.png')}
                        fadeDuration={0} style={homeScreenStyle.actionScren.actionIcon}></Image>
                    <Text style={[homeScreenStyle.actionScren.button, homeScreenStyle.actionScren.btnMoreInfo]}>More Info</Text>
                </Pressable>
            </View>
        </View>
    </>)
}

export default Actions;