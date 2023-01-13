//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Colors from '../../services/constants/colors';
import RouteNames from '../../services/constants/route-names';
import {ScrollView} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppImages from '../../assets/images';
import HotDealItems from '../../components/hot-deal-items';

const StoreDetailScreen = ({navigation}) => {
  
  return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.homeHeaderContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  type="ant-design"
                  color={Colors.white}
                  size={responsiveFontSize(3)}
                  name="arrowleft"
                  style={styles.backButton}
                />
              </TouchableOpacity>
              <Text style={styles.addressText}>Store Details</Text>
            </View>
            <View>
              <View style={styles.storeDetailsContainer}>
                <Image
                  style={styles.storeImage}
                  source={AppImages.storeDetailImage}
                />
                <View>
                  <Text style={styles.blackText}>FlipCart Store</Text>
                  <View style={styles.row}>
                    <Text style={styles.greyText}>(1.9 km away)</Text>
                    <View style={styles.greenDot} />
                    <Text style={styles.greenText}>Open Now</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.optionContainer}>
                <View style={styles.row}>
                  <Text
                    style={[
                      styles.greyText,
                      {
                        paddingHorizontal: responsiveFontSize(1.5),
                        borderRightWidth: 1,
                        borderRightColor: Colors.grey,
                      },
                    ]}>
                    Branch
                  </Text>
                  <Text
                    style={[
                      styles.optionText,
                      {marginLeft: responsiveFontSize(1.5)},
                    ]}>
                    Al - Shuhieen
                  </Text>
                </View>
                <Icon
                  type="ant-design"
                  color={Colors.grey}
                  size={responsiveFontSize(2.5)}
                  name="down"
                />
              </TouchableOpacity>
              <View style={styles.locationSelectContainer}>
                <View style={styles.locationIconContainer}>
                  <Icon
                    type="entypo"
                    size={responsiveFontSize(4)}
                    color={Colors.orange}
                    name="location-pin"
                  />
                </View>
                <View style={{marginLeft: responsiveWidth(1)}}>
                  <Text style={styles.currentLocationText}>
                    Location & Distance
                  </Text>
                  <Text style={styles.greyText}>
                    Street 36, Guild Wall London, UK
                  </Text>
                </View>
              </View>
              <View style={styles.locationSelectContainer}>
                <View style={styles.locationIconContainer}>
                  <Icon
                    type="material-community"
                    size={responsiveFontSize(4)}
                    color={Colors.orange}
                    name="clock"
                  />
                </View>
                <View style={{marginLeft: responsiveWidth(1)}}>
                  <Text style={styles.currentLocationText}>Opening Hours</Text>
                  <Text style={styles.greyText}>8PM - 5AM | Sunday Closed</Text>
                </View>
              </View>
            </View>
            <View style={styles.searchContainer}>
              <View style={styles.locationSelectContainer}>
                <TouchableOpacity>
                  <Icon
                    type="feather"
                    size={responsiveFontSize(2)}
                    color={Colors.grey}
                    name="search"
                  />
                </TouchableOpacity>
                <TextInput
                  placeholder="Search in this store..."
                  style={styles.searchText}
                  placeholderTextColor={Colors.grey}
                />
              </View>
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Jump to category"
                style={styles.searchText}
                placeholderTextColor={Colors.grey}
              />
            </View>
            <View
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  marginHorizontal: responsiveWidth(5),
                },
              ]}>
              <View style={styles.lineView} />
              <View style={styles.row}>

                {/* {-------------------------------} */}
                <Text style={styles.currentLocationText}>🥛 Diary</Text>
              </View>
              <View style={styles.lineView} />
            </View>
            <HotDealItems data={[1, 2, 3, 4]} />
            <View
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  marginHorizontal: responsiveWidth(5),
                },
              ]}>
              <View style={styles.lineView} />
              <View style={styles.row}>

                {/* {---------------------} */}
                <Text style={styles.currentLocationText}>🥩 Meat</Text>
              </View>
              <View style={styles.lineView} />
            </View>
            <HotDealItems data={[1, 2, 3, 4]} />
          </View>
        </ScrollView>
        <View style={styles.bottomSheet}>
          <TouchableOpacity
            style={styles.goToStoreButton}
            onPress={() => navigation.navigate(RouteNames.storeLocationScreen)}>
            <Text style={styles.goToStoreText}>Go To Store Location</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

//make this component available to the app
export default StoreDetailScreen;
