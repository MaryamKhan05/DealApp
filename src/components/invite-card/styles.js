import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Colors from '../../services/constants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(97.5),
        height: responsiveHeight(20),
        backgroundColor: 'transparent',
        // margin: responsiveWidth(2.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        // elevation: 5,
    },
    backImageStyle: {
        width: responsiveWidth(95),
        height: responsiveHeight(20),
        borderRadius: 10,
        margin: responsiveWidth(2.5),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 5,
    },
    image: {
        width: responsiveWidth(40),
        height: responsiveHeight(25),
        resizeMode: 'contain',
        borderRadius: 10,
    },
    detailsContainer: {
        marginLeft: responsiveWidth(7),
    },
    headerText: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: responsiveFontSize(2.5),
    },
    seeAllText: {
        color: '#5F2800',
        fontSize: responsiveFontSize(2),
        marginVertical: responsiveHeight(.75)
    },
    priceContainer: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    discountedPriceText: {
        color: Colors.orange,
        fontWeight: '600',
        fontSize: responsiveFontSize(2),
    },
    oldPriceText: {
        color: Colors.grey,
        fontWeight: '600',
        fontSize: responsiveFontSize(2),
        textDecorationLine: 'line-through',
        marginLeft: responsiveWidth(1)
    },
    heartIcon: {
        position: 'absolute',
        top: responsiveHeight(2),
        left: responsiveWidth(2.5),
        zIndex: 10,
    },
    inviteButton: {
        height: responsiveHeight(5),
        width: responsiveWidth(30),
        backgroundColor: '#EF9C00',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inviteText: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: responsiveFontSize(2.5),
    },
});

//make this component available to the app
export default styles