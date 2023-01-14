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
    backButton: {
        marginRight: responsiveWidth(28),
    },
    homeHeaderContainer: {
        backgroundColor: Colors.blue,
        padding: responsiveWidth(5),
        // marginBottom: responsiveWidth(10),
        flexDirection: 'row',
        // justifyContent:'space-between',
    },
    addressText: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    storeDetailsContainer: {
        width: responsiveWidth(95),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    storeImage: {
        width: responsiveWidth(25),
        height: responsiveWidth(25),
        borderRadius: 100,
        resizeMode: 'cover',
    },
    greenDot: {
        width: responsiveWidth(1.75),
        height: responsiveWidth(1.75),
        borderRadius: 50,
        marginHorizontal: (responsiveWidth(1)),
        backgroundColor: Colors.lightGreen,
    },
    greenText: {
        color: Colors.lightGreen,
        fontSize: responsiveFontSize(1.5),
    },
    greyText: {
        color: Colors.grey,
        fontSize: responsiveFontSize(1.5),
    },
    blackText: {
        color: Colors.black,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
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
        marginTop: responsiveHeight(1.25),
        height: responsiveHeight(6)
    },
    optionText: {
        color: Colors.darkGrey,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.5),
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
    searchContainer: {
        width: responsiveWidth(90),
        height: responsiveHeight(6.5),
        backgroundColor: Colors.whiteTransparent,
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: responsiveHeight(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(2),
        alignItems: 'center',
        alignSelf: 'center',
    },
    filterContainer: {
        width: responsiveHeight(5),
        height: responsiveHeight(5),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    searchText: {
        width: responsiveWidth(65),
        height: responsiveHeight(6),
        color: Colors.white,
        paddingHorizontal: responsiveWidth(2),
    },
    lineView: {
        borderWidth: .5,
        borderColor: Colors.grey,
        width: responsiveWidth(30),
        marginTop: responsiveHeight(1),
    },
    foodTypeImage: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        resizeMode: 'contain',
    },
    bottomSheet: {
    //     backgroundColor: Colors.white,
    //     position: 'absolute',
        bottom: responsiveHeight(1.5),
    //     // zIndex: 20,
    //     borderTopRightRadius: 20,
    //     borderTopLeftRadius: 20,
    //     paddingVertical: responsiveWidth(1),
    //     width: responsiveWidth(100),
    },
    goToStoreButton: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        height: responsiveHeight(6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        borderRadius: 10,
        marginBottom:20
    },
    goToStoreText: {
        color: Colors.white,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
});
export default styles