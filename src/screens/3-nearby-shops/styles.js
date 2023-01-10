import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Colors from '../../services/constants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },
    bottomSheet: {
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom: responsiveHeight(5),
        zIndex: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingVertical: responsiveWidth(5),
    },
});
export default styles