import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Colors from '../../services/constants/colors'
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(95),
        height: responsiveHeight(12),
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginHorizontal: responsiveWidth(2.5),
        marginBottom: responsiveWidth(2.5),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 5,
        padding: responsiveWidth(2.5)
    },
    image: {
        width: responsiveHeight(10),
        height: responsiveHeight(10),
        resizeMode: 'cover',
        borderRadius: 10,
    },
    detailsContainer: {
        marginLeft: responsiveWidth(2),
    },
    headerText: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: responsiveFontSize(2),
    },
    seeAllText: {
        color: Colors.grey,
        fontSize: responsiveFontSize(1.5),
        marginVertical: responsiveHeight(.75)
    },
    priceContainer: {
        justifyContent: 'flex-start',
        // alignSelf: 'center',
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
        // position: 'absolute',
        // top: responsiveHeight(2),
        right: responsiveWidth(2.5),
        zIndex: 10,
    },
    flatListContainer: {
        marginBottom: responsiveHeight(8),
        marginTop: responsiveWidth(2.5),
        // marginRight:responsiveWidth(1),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(70)
    },
});

//make this component available to the app
export default styles