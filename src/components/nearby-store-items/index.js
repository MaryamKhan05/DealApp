import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import RouteNames from '../../services/constants/route-names';
const NearbyStoreItems = ({data, navigation}) => {
  const renderItem = () => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(RouteNames.storeDetailScreen)}>
        <Image source={AppImages.storeItem1} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}>
            Milk Pak <Text style={styles.seeAllText}>(2.5km away)</Text>
          </Text>
          <View style={styles.priceContainer}>
            <Icon
              type="entypo"
              name="location-pin"
              color={Colors.grey}
              size={responsiveFontSize(2)}
            />
            <Text style={styles.seeAllText}>
              Street 36, Guild Wall London, UK
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Icon
              type="material-community"
              name="clock-time-four-outline"
              color={Colors.grey}
              size={responsiveFontSize(2)}
            />
            <Text style={styles.seeAllText}>5PM - 8AM | Open Now</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NearbyStoreItems;
