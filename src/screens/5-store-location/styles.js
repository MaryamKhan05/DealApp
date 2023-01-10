import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Colors from '../../services/constants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },
    bottomSheet: {
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom: responsiveHeight(0),
        zIndex: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingVertical: responsiveWidth(5),
        width: responsiveWidth(100),
    },
    locationIconContainer: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 146, 67, 0.1)',
        borderRadius: 20,
        marginRight: responsiveWidth(1),
    },
    locationSelectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: responsiveWidth(2.5)
    },
    currentLocationText: {
        color: Colors.black,
        fontSize: responsiveFontSize(2),
        marginRight: responsiveWidth(0.75)
    },
    greyText: {
        color: Colors.grey,
        fontSize: responsiveFontSize(1.5),
    },
    openNowText: {
        backgroundColor: Colors.lightGreen,
        paddingVertical: responsiveHeight(.5),
        paddingHorizontal: responsiveWidth(2),
        color: Colors.white,
        fontWeight: 'bold',
        borderRadius: 20,
        marginLeft: responsiveWidth(1.5)
    },
});
export default styles