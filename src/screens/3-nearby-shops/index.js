import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import AppImages from '../../assets/images';
import NearbyStoreItems from '../../components/nearby-store-items';
import styles from './styles';
const NearbyShopScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.container} source={AppImages.mapImage} />
      <View style={styles.bottomSheet}>
        <NearbyStoreItems data={[1, 2, 3, 4]} navigation={navigation} />
      </View>
    </View>
  );
};
export default NearbyShopScreen;
