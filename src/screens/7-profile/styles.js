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
        marginBottom: responsiveWidth(10),
    },
    userDetailContainer: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    locationIconContainer: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteTransparent,
        borderRadius: 100,
        marginRight: responsiveWidth(1),
        alignSelf: 'center',
        marginBottom: - responsiveWidth(15)
    },
    userImage: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        borderRadius: 100,
        resizeMode: 'cover',
        borderColor: Colors.white,
        borderWidth: 5,
    },

    currentLocationText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: responsiveFontSize(2),
        marginRight: responsiveWidth(0.75)
    },
    addressText: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        // marginRight: responsiveWidth(0.75),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: responsiveHeight(1.5)
    },
    listHeaderContainer: {
        width: responsiveWidth(90),
        alignItems: 'center',
        // justifyContent: 'space-between',
        alignSelf: 'center',
        // flexDirection: 'row',
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
    userNameText: {
        color: Colors.darkGrey,
        fontWeight: '600',
        fontSize: responsiveFontSize(2),
    },
    optionContainer: {
        width: responsiveWidth(95),
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(2.5),
        flexDirection: 'row',
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: responsiveHeight(1.5),
        marginTop: responsiveHeight(1.25)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    optionText: {
        color: Colors.darkGrey,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.5),
    },
});
export default styles