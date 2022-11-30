import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import Filter from '../component/Home/Filter';
import NotificationCard from "../component/Home/NotificationCard";

const HomeScreen = ({navigation}) => {
    return (
        <>
            <Filter></Filter>
            <View>
                <SafeAreaView>
                    <ScrollView>
                        <NotificationCard mapKey={'apinvapr'} displayCount={'10'}></NotificationCard>
                        <NotificationCard mapKey={'pabudwf'} displayCount={'9'}></NotificationCard>
                        <NotificationCard mapKey={'poreqcha'} displayCount={'8'}></NotificationCard>
                        <NotificationCard mapKey={'apexp'} displayCount={'7'}></NotificationCard>
                        <NotificationCard mapKey={'reqapprv'} displayCount={'6'}></NotificationCard>
                        <NotificationCard mapKey={'xxcmstoc'} displayCount={'5'}></NotificationCard>
                        <NotificationCard mapKey={'xxcmstra'} displayCount={'4'}></NotificationCard>
                        <NotificationCard mapKey={'porpocha'} displayCount={'3'}></NotificationCard>
                        <NotificationCard mapKey={'cmappr'} displayCount={'2'}></NotificationCard>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    );
}
export default HomeScreen;