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
import Colors from '../../services/constants/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Buffer} from '@craftzdog/react-native-buffer';
import RouteNames from '../../services/constants/route-names';
import {useSelector} from 'react-redux';
import SearchContext from '../../context/searchContext';
import { ToastAndroid } from 'react-native';
import { useEffect } from 'react';

const DealItems = () => {
  const items = useContext(SearchContext);
  const[matchedIndex,setMatchedIndex]=useState('')
  const filteredDeals = useContext(SearchContext);
  const filteredItems = useContext(SearchContext);
  // console.log('filtered deals are::::::::::::::::::::::', filteredDeals);
  // console.log('filtered items are::::::::::::::::::::::::',filteredItems);
  // console.log(items);
  const userTokenValue = useSelector((state) => state.reducer.userToken);
  const userId = useSelector(state => state.reducer.userId);
  const dummyToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5M2ZmOWJmYTBmNTlkZGM0ZTBjNjgiLCJpYXQiOjE2NzM1MDExMzd9.RShrwmDdUOqQA4nans4-3gWGZMvD0kRrXlf8IGVil_0';
  const navigation = useNavigation();
  //const [token, setToken] = useState(userTokenValue);
  const[color,setColor]=useState(false)
  const[favprods,setFavProds]=useState([])
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userTokenValue}`,
  };

  const handleFavourite = async _id => {
    console.log(userTokenValue)
    if (userTokenValue==null) {
      alert('Please login to add product as favorite');
      navigation.navigate(RouteNames.LoginScreen);
      return;
    }
    
    try {
      console.log(userId)
      const response = await fetch(
        `https://project-production-7b65.up.railway.app/User/addFavProduct`,

        {
          method: 'POST',
          body: JSON.stringify({
            userId,
            productId: _id,
          }),
          headers,
        },
      );

const json = await response.json();
     console.log(json)
     if(json.status==200){
      getFavItems()
      ToastAndroid.show(json.message, ToastAndroid.SHORT)

     }
      //console.log(json);
    } catch (error) {
      console.log(error)
    alert(error.message);

    }
  };
 
  const getFavItems=()=>{
    fetch(
      'https://project-production-7b65.up.railway.app/User/getAllFavProducts',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          userId,
        }),
      },
    )
      .then(response => response.json())
      .then(json => {
        const a=Object.values(json)
        setFavProds(a[1])

       
      })
      .catch(errr => alert(errr.message));
  }
  
useEffect(()=>{
  getFavItems()

},[])

  const renderItem = ({item,index}) => {
    const imageData = item.image.data.data;
    const imageType = item.image.contentType;
    const base64String = Buffer.from(imageData).toString('base64');
    const imageUri = `data:${imageType};base64,${base64String}`;
  const a= favprods.find((i)=> i.productId == item._id)
 
  if(a!=undefined){
    console.log(index)
  setMatchedIndex(index)
  } 
    
    return (
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => handleFavourite(item._id)}>
          <Icon
          key={index}
            type="entypo"
            name="heart"
            size={responsiveFontSize(2)}
            color={index==matchedIndex? Colors.red:Colors.grey}
           // color={item?.selected == true ? Colors.red : Colors.grey}
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
      {filteredDeals !== null ? (
        <FlatList
          data={filteredDeals.deals.products}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator />
      )}
      {/* <Text> {JSON.stringify(filteredDeals)}</Text> */}
    </SafeAreaView>
  );
};

export default DealItems;
