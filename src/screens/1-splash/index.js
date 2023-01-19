import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useDispatch } from 'react-redux';
import AppImages from '../../assets/images';
import RouteNames from '../../services/constants/route-names';
import { updateUserId, updateUserToken } from '../../storage/Reducer';
const SplashScreen = ({navigation}) => {
  const dispatch=useDispatch()
  
  useEffect(() => {
    AsyncStorage.getItem('@User_Token').then((val)=>{
      
      dispatch(updateUserToken(val.toString()))
     AsyncStorage.getItem('@User_Id').then((val)=>{
      dispatch(updateUserId(val))
     }) 
    })
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
