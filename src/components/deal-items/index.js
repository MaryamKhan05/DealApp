import React, {Component, useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import RouteNames from '../../services/constants/route-names';

const DealItems = ({data}) => {
  
  const navigation = useNavigation();
  // console.log(navigation);
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0',
  );
  const [deals, setDeals]= useState([]);
  const [isloading,setIsLoading]=useState(true);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    fetch(
      'https://project-production-7b65.up.railway.app/Admin/getNearbyOffer',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          lattitude: 90.0715,
          longnitude: 29.951,
        }),
      },
    )
      .then(response => response.json())
      .then(json =>setDeals(json))
      .finally(()=>setIsLoading(false)).catch(errr=>alert(errr.message));
  }, []);

  const renderItem = ({item}) => {
    // console.log('item is:',item);
    return (
      <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate(RouteNames.storeDetailScreen)}>
        <TouchableOpacity style={styles.heartIcon}>
          <Icon
            type="entypo"
            name="heart"
            size={responsiveFontSize(2)}
            color={item?.selected == true ? Colors.red : Colors.grey}
          />
        </TouchableOpacity>
        <Image source={AppImages.storeItem1} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}>{item.branchName}</Text>
          <Text style={styles.seeAllText}>Walmart</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discountedPriceText}>$ 20</Text>
            <Text style={styles.oldPriceText}>$ 50</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.flatListContainer}>
      {!isloading?(
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={deals.store}
        renderItem={renderItem}
      />
      // <Text>data {JSON.stringify(deals)}</Text>
      ):
      (
        <ActivityIndicator />
      )
      }
      
    </View>
  );
};

export default DealItems;
