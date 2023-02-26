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
import { useNavigation } from '@react-navigation/native';
import RouteNames from '../../services/constants/route-names';

const PromotionItems = ({Data}) => {
  const [isloading, setIsLoading] = useState(false);
  const {addfavstore, userid, favestore} = useContext(SearchContext);
const navigation = useNavigation();

  const handlefavorit=(id, item)=>{
    console.log(item);
if (userid) {
  // alert(id);
 const finder = favestore?.some(item => item?.dealId._id == id);
 if(finder){
  alert("find")
 }
 else{
  addfavstore(id)
  // console.log(finder)
 }

} else {
  // alert(userid);
   navigation.navigate(RouteNames.LoginScreen);
}
  }

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => handlefavorit(item.dealId._id, item)}>
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
          // handleDeleteFav={handleDeleteFav}
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
