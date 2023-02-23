import React, {useState, useContext} from 'react';
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
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../services/constants/route-names';
import SearchContext from '../../context/searchContext';

const HotDealItems = () => {
  const navigation = useNavigation();
  const deals = useContext(SearchContext);
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0',
  );
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@User_Token', value);
      console.log('added successfully');
    } catch (e) {
      console.log(e.message);
    }
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
        `https://project-production-7b65.up.railway.app/User/addFavStore`,

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
      // alert(json.status);
      console.log(json);
      storeData(json);
    } catch (error) {
      // alert(error.message);
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
            <Text style={styles.discountedPriceText}>{item.offerPrice}</Text>
            <Text style={styles.oldPriceText}>$ {item.orignalPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.flatListContainer}>
      {/* <Text>data{JSON.stringify(deals.products)} </Text> */}
      {deals !== null ? (
        // <FlatList
        //   horizontal
        //   showsHorizontalScrollIndicator={false}
        //   data={deals.deals.products}
        //   renderItem={renderItem}
        // />
        <></>
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  );
};

export default HotDealItems;
