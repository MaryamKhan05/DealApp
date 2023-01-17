import React, {Component, useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Buffer} from '@craftzdog/react-native-buffer';
import RouteNames from '../../services/constants/route-names';
import {useSelector} from 'react-redux';
import SearchContext from '../../context/searchContext';

const DealItems = () => {
  const items = useContext(SearchContext);

  console.log(items);
  const userTokenValue = useSelector(state => state.userToken);
  const dummyToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0';
  const navigation = useNavigation();
  const [token, setToken] = useState(userTokenValue);
  const [deals, setDeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const handleFavourite = async _id => {
    let isLoggedIn = false;
    const checkIsLoggedIn = async () => {
      try {
        const value = await AsyncStorage.getItem('loggedIn');
        if (value === 'true') {
          isLoggedIn = true;
        } else {
          isLoggedIn = false;
        }
      } catch (e) {
        isLoggedIn = false;
      }
    };
    checkIsLoggedIn();
    if (!isLoggedIn) {
      alert('Please login to add product as favorite');
      navigation.navigate(RouteNames.LoginScreen);
      return;
    }
    try {
      const response = await fetch(
        `https://project-production-7b65.up.railway.app/User/addFavProduct`,

        {
          method: 'POST',
          body: JSON.stringify({
            userId: token,
            productId: _id,
          }),
          headers,
        },
      );
      const json = await response.json();
      alert(json.status);
      console.log(json);
      storeData(json);
    } catch (error) {
      alert(error.message);
    }
  };
  const renderItem = ({item}) => {
    const imageData = item.image.data.data;
    const imageType = item.image.contentType;
    const base64String = Buffer.from(imageData).toString('base64');
    const imageUri = `data:${imageType};base64,${base64String}`;
    return (
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => handleFavourite(item._id)}>
          <Icon
            type="entypo"
            name="heart"
            size={responsiveFontSize(2)}
            color={item?.selected == true ? Colors.red : Colors.grey}
          />
        </TouchableOpacity>
        <Image source={{uri: imageUri}} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}>{item.name}</Text>
          <Text style={styles.seeAllText}>Walmart</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discountedPriceText}>$ {item.offerPrice}</Text>
            <Text style={styles.oldPriceText}>$ {item.orignalPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.flatListContainer}>
      {items !== null ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items.products}
          renderItem={renderItem}
        />
      ) : (
        <ActivityIndicator />
      )}

      {/* <Text> {JSON.stringify(items)}</Text> */}
    </SafeAreaView>
  );
};

export default DealItems;
