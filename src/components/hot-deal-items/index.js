import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HotDealItems = ({data}) => {
  const [deals, setDeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0',
  );
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });
  useEffect(() => {
    fetch('https://project-production-7b65.up.railway.app/Admin/getAllStores', {
      method: 'GET',
      headers,
    })
      .then(response => response.json())
      // .then(console.log('promotion items'))// getting LOG  {"favstore": [], "status": "200"}
      .then(json => setDeals(json))
      .finally(() => setIsLoading(false))
      .catch(errr => alert(errr.message));
  }, []);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@User_Token', value);
      console.log('added successfully');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleFavourite = async storeId => {
    // if (!firstName || !lastName || !email || !password) {
    //   alert('Please fill out all fields');
    //   return;
    // }
    try {
      const response = await fetch(
        `https://project-production-7b65.up.railway.app/User/addFavStore`,
        {
          method: 'POST',
          body: JSON.stringify({
            userId: token,
            storeId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const json = await response.json();
      // if (json.status === '200') {
      console.log(response.json);
      alert(json.status);
      console.log(json);
      // console.log(json);
      storeData(json);
      // navigation.navigate(RouteNames.mainHomeScreen);
      // } else {
      //   alert(json.message);
      // }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.hotDealImage} source={AppImages.hotDealTag} />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon
            type="entypo"
            size={responsiveFontSize(2)}
            color={item?.selected == true ? Colors.red : Colors.grey}
            name="heart"
            onPress={() => handleFavourite(item.storeId)}
          />
        </TouchableOpacity>
        <Image source={AppImages.promotionItem1} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}>{item.branchName}</Text>
          <View style={styles.rowJustified}>
            <Text style={styles.seeAllText}>Start</Text>
            <Text style={styles.seeAllText}>{item.startDate}</Text>
          </View>
          <View style={styles.rowJustified}>
            <Text style={styles.seeAllText}>End</Text>
            <Text style={styles.seeAllText}>{item.endDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.discountedPriceText}>{item.storeId}</Text>
            <Text style={styles.oldPriceText}>$ 50</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.flatListContainer}>
      {/* <Text>data{JSON.stringify()} </Text> */}
      {!isloading ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={deals.stores}
          renderItem={renderItem}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default HotDealItems;
