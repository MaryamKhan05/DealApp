import React, {useState, useEffect, useContext} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchContext from '../../context/searchContext';
import Api from '../../../Api';

const PromotionItems = ({Data}) => {
  console.log("my Data is here", Data)
  const [deals, setDeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const filteredDeals = useContext(SearchContext);

  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0',
  );
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    fetch(
      'https://project-production-7b65.up.railway.app/User/getAllFavStore',
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

  const handleDeleteFav = async storeId => {
    try {
      const response = await fetch(
        `https://project-production-7b65.up.railway.app/User/deleteFavStore`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: storeId,
          }),
          headers,
        },
      );

      const json = await response.json();
      // alert(json.status);
      console.log(json);
    } catch (error) {
      // alert(error.message);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => handleDeleteFav(item.storeId._id)}>
          <Icon
            type="entypo"
            size={responsiveFontSize(2)}
            color={item?.selected == true ? Colors.red : Colors.grey}
            name="heart"
          />
        </TouchableOpacity>
        {console.log('my image=' + `${Api}${item.storeId.storeImage}`)}

        <Image
          source={{
            uri: `${Api}${item.storeId.storeImage}`,
          }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}>{item.storeId.storeName}</Text>
          <Text style={styles.discountedPriceText}>{item.dealId.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.flatListContainer}>
      {!isloading ? (
        <FlatList
          // horizontal
          // showsHorizontalScrollIndicator={true}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          handleDeleteFav={handleDeleteFav}
          numColumns={2}
        />
      ) : (
        <ActivityIndicator />
      )}
      {/* <Text> {JSON.stringify(deals.stores)}</Text> */}
    </View>
  );
};
  // the reason of this call is

export default PromotionItems;
