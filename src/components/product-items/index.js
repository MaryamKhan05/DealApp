import React, {useState, useEffect} from 'react';
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
import { useSelector } from 'react-redux';
const ProductItems = ({data, navigation}) => {
  const userToken = useSelector((state)=>state.userToken)
  const [token, setToken] = useState( userToken);
  const [deals, setDeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    fetch(
      'https://project-production-7b65.up.railway.app/User/getAllFavProducts',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          userId: token,
        }),
      },
    )
      .then(response => response.json())
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

  const handleDeleteFav = async _id => {
    try {
      const response = await fetch(
        `https://project-production-7b65.up.railway.app/User/deleteFavStore`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: _id,
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
    return (
      <TouchableOpacity style={styles.container}>
        <Image source={AppImages.storeItem1} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            {/* <Text style={styles.headerText}>Milk Pak</Text> */}
            <Text style={styles.headerText}>{item._id}</Text>
            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => handleDeleteFav(item._id)}>
              <Icon
                type="entypo"
                name="heart"
                size={responsiveFontSize(2)}
                color={item?.selected == true ? Colors.red : Colors.grey}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.seeAllText}>Walmart</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPriceText}>$ 20</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.flatListContainer}>
      {!isloading ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={deals.favProds}
          renderItem={renderItem}
        />
      ) : (
        <ActivityIndicator />
      )}
      {/* <Text>{JSON.stringify(deals.favProds)}</Text> */}
    </SafeAreaView>
  );
};

export default ProductItems;
