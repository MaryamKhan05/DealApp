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
import {ToastAndroid} from 'react-native';
import {useEffect} from 'react';
import Api from '../../../Api';

const DealItems = ({Data}) => {
  // const items = useContext(SearchContext);
  // console.log("My Data is here =",Data)
  const [matchedIndex, setMatchedIndex] = useState('');
  const {filteredDeals, filterproducts, addfavProducts} =
    useContext(SearchContext);
  const {userid, token} = useContext(SearchContext);

  const navigation = useNavigation();
  //const [token, setToken] = useState(userTokenValue);
  const [color, setColor] = useState(false);
  const [favprods, setFavProds] = useState([]);
  const [iconcolor, setIconcolor] = useState(color.grey);
const handleaddfav = uid => {
  setIconcolor('red');
  // alert(id);
  if(userid){

    addfavProducts(uid)
  }
  else{

    navigation.navigate(RouteNames.LoginScreen)
  }
};
  const renderItem = ({item, index}) => {
    
    return (
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => handleaddfav(item._id)}>
          <Icon
            key={index}
            type="entypo"
            name="heart"
            size={responsiveFontSize(2)}
            color={'black'}
            // color={item?.selected == true ? Colors.red : Colors.grey}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: `${Api}${item.productId.image}`,
          }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}> {item.productId.name}</Text>
          <Text style={styles.seeAllText}>{item.storeId.storeName}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discountedPriceText}>
              $ {item.discountPrice}
            </Text>
            <Text style={styles.oldPriceText}>
              ${item.productId.orignalPrice}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.flatListContainer}>
      {filterproducts !== null ? (
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  );
};

export default DealItems;
