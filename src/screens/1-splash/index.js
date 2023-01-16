import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppImages from '../../assets/images';
import RouteNames from '../../services/constants/route-names';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RouteNames.mainHomeScreen);
    }, 1500);
  }, []);
  return <Image source={AppImages.splashScreen} style={styles.splash} />;
};

const styles = StyleSheet.create({
  splash: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    resizeMode: 'cover',
  },
});
export default SplashScreen;
