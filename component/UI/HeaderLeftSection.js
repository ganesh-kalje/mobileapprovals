import { Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderLeftBar = () => {
    const navigate = useNavigation();
    return <Pressable onPress={() => navigate.toggleDrawer()} >
       <AntDesign name="bars" size={25} color="#fff" style={{marginRight: 20, paddingRight: 20}} />
    </Pressable>
}

export default HeaderLeftBar;