import { Text } from "react-native";
import { useId } from 'react';
import { homeScreenStyle } from "../../../styles/global";

const LineListCar = ({ route, navigation }) => {
    const selectorId = useId();
    const { lineDetails, LOOKUP_CODE } = (route.params !== null) ? route.params : {};
    const styleObj = { borderLeft: '0px !important' };
    let lineListDetails = (lineDetails) ? lineDetails[1] : [];

    if (LOOKUP_CODE === 'XXCMSTOC') { // Onecard
        const question_ans_details = [];
        for (let i in lineListDetails) {
            const item = lineListDetails[i];
            question_ans_details.push({
                "Question": item.Question,
                "Answer": (item.Answer === undefined ? '-' : item.Answer)
            });
        }
        lineListDetails = question_ans_details;
    }
    
    console.log(lineDetails);
    console.log(LOOKUP_CODE);
    return <>
        <View style={[homeScreenStyle.notificationDetails.card, homeScreenStyle.notificationDetails.shadowProp, { flex: 1 }]}>
        </View>
    </>
}

export default LineListCar;