import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Colors from '../../services/constants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(40),
        height: responsiveHeight(20),
        backgroundColor: Colors.white,
        borderRadius: 10,
        margin: responsiveWidth(2.5),
        // alignItems: 'center',
        elevation: 5,
        padding: responsiveWidth(2.5)
    },
    image: {
        width: responsiveWidth(35),
        height: responsiveHeight(12),
        resizeMode: 'cover',
        borderRadius: 5,
    },
    detailsContainer: {
        marginLeft: responsiveWidth(2),
    },
    headerText: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(.75)
    },
    seeAllText: {
        color: Colors.grey,
        fontSize: responsiveFontSize(1.5),
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
        fontSize: responsiveFontSize(1.5),
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
        right: responsiveWidth(5),
        zIndex: 10,
    },
    flatListContainer: {
        marginLeft: responsiveWidth(2.5)
    },
});

//make this component available to the app
export default styles