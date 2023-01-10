import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AppImages from '../../assets/images';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
const StoreLocationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.container} source={AppImages.mapImage} />
            <View style={styles.bottomSheet}>
                <View style={{ marginLeft: responsiveWidth(4), flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={[styles.currentLocationText, { fontWeight: 'bold' }]} >
                        Walmart Store
                    </Text>
                    <Text style={styles.openNowText} >
                        Open now
                    </Text>
                </View>
                <View style={styles.locationSelectContainer}>
                    <View style={styles.locationIconContainer} >
                        <Icon type='entypo' size={responsiveFontSize(4)} color={Colors.orange} name='location-pin' />
                    </View>
                    <View style={{ marginLeft: responsiveWidth(1) }} >
                        <Text style={styles.currentLocationText} >
                            Location & Distance
                        </Text>
                        <Text style={styles.greyText} >
                            Street 36, Guild Wall London, UK
                        </Text>
                    </View>
                </View>
                <View style={styles.locationSelectContainer}>
                    <View style={styles.locationIconContainer} >
                        <Icon type='material-community' size={responsiveFontSize(4)} color={Colors.orange} name='clock' />
                    </View>
                    <View style={{ marginLeft: responsiveWidth(1) }} >
                        <Text style={styles.currentLocationText} >
                            Opening Hours
                        </Text>
                        <Text style={styles.greyText} >
                            8PM - 5AM | Sunday Closed
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default StoreLocationScreen