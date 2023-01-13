import React, {Component, useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import { ActivityIndicator } from 'react-native';

const PromotionItems = ({data}) => {
const [deals, setDeals]= useState([]);
const [isloading,setIsLoading]=useState(true);

  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0',
  );
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });
  useEffect(() => {
    fetch('https://project-production-7b65.up.railway.app/User/getAllFavStore', {
      method: 'POST',
      headers,
    })
      .then(response => response.json())
      // .then(console.log('promotion items'))// getting LOG  {"favstore": [], "status": "200"}
      .then(json => setDeals(json))
      .finally(()=>setIsLoading(false)).catch(errr=>alert(errr.message));
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity style={styles.heartIcon}>
          <Icon
            type="entypo"
            size={responsiveFontSize(2)}
            color={item?.selected == true ? Colors.red : Colors.grey}
            name="heart"
          />
        </TouchableOpacity>
        <Image source={AppImages.promotionItem1} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}>{item.id}</Text>
          <Text style={styles.discountedPriceText}>11.11 Sale is On</Text>
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
        data={data}
        renderItem={renderItem}
      />
      ):
      (
        <ActivityIndicator />
      )
      }
      {/* <Text style={{fontWeight:'bold', fontSize:30}}>Fav stores {JSON.stringify(deals)}</Text> */}
    
    </View>
  );
};

export default PromotionItems;
