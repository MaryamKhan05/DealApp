import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Colors from "../../services/constants/colors";
const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: Colors.white
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    homeHeaderContainer: {
        backgroundColor: Colors.blue,
        padding: responsiveWidth(5),
        marginBottom: responsiveHeight(2),
    },
    userDetailContainer: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    locationIconContainer: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteTransparent,
        borderRadius: 100,
        marginRight: responsiveWidth(1)
    },
    userImage: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderRadius: 100,
        resizeMode: 'cover',
    },
    locationSelectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    currentLocationText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: responsiveFontSize(2),
        marginRight: responsiveWidth(0.75)
    },
    addressText: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        marginRight: responsiveWidth(0.75),
        fontWeight: 'bold'
    },
    listHeaderContainer: {
        width: responsiveWidth(90),
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    headerText: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: responsiveFontSize(2),
    },
    seeAllText: {
        color: Colors.grey,
        fontWeight: '600',
        fontSize: responsiveFontSize(1.5),
    },
});
export default styles