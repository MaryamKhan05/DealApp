import React, {useState, useEffect, useContext} from 'react';
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
import {useSelector} from 'react-redux';
import SearchContext from '../../context/searchContext';
import Api from '../../../Api';
const ProductItems = () => {
  const userToken = useSelector(state => state.reducer.userToken);
  const userId = useSelector(state => state.reducer.userId);
  const {favproduct, favloading} = useContext(SearchContext);
  //const [token, setToken] = useState(userToken);
  
  useEffect(() => {
    
  }, []);


  const renderItem = ({item}) => {
    console.log("my item here are=",item)
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          source={{
            uri: `${Api}${item.offerId?.productId?.image}`,
          }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            {/* <Text style={styles.headerText}>Milk Pak</Text> */}
            <Text style={styles.headerText}>
              {item?.offerId.productId?.name}
            </Text>
            {/* <Text style={styles.headerText}>{item._id}</Text> */}
            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => handleDeleteFav(item?._id)}>
              <Icon
                type="entypo"
                name="heart"
                size={responsiveFontSize(2)}
                color={'red'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPriceText}>
                $ {item?.offerId?.productId?.orignalPrice}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.flatListContainer}>
      {!favloading ?(

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={favproduct}
          renderItem={renderItem}
        />
      ):(
        <ActivityIndicator />
      )}

      {/* <Text>{JSON.stringify(deals.favProds)}</Text> */}
    </SafeAreaView>
  );
};

export default ProductItems;
