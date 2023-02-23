import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './styles';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../services/constants/colors';
import {ScrollView} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AppImages from '../../assets/images';
import DealItems from '../../components/deal-items';
import PromotionItems from '../../components/promotion-items';
import InviteCard from '../../components/invite-card';
import SearchContext from '../../context/searchContext';
import Api from '../../../Api';

const MainHomeScreen = () => {
  // const {search, handleSearch} = useContext(SearchContext);

  const [search, setSearch] = useState('');
  // const {search, setSearch, results, handleSearch} = useContext(SearchContext);
const [products,setProducts]=useState([])
const [stores,setStores]=useState([])
const [filterProduct,setFilterProduct]=useState([])
const [filterstore,setFilterStore]=useState([])

const handleSearch=(val)=>{
  // console.log(val)
  if(val.trim()!=''){
    const newproduct = products.filter(
      item => item.productId.name.trim().toLowerCase().includes(val.trim().toLowerCase())
    );
    const newstore = stores.filter(item =>
      item.storeId.storeName
        .trim()
        .toLowerCase()
        .includes(val.trim().toLowerCase()),
    );
    setFilterStore(newstore)
    setFilterProduct(newproduct)
  }
  else{
    setFilterProduct(products)
  }
}
const getStoreData=async()=>{
  const url = `${Api}User/getNearbyDealsStores`;
  const data = {
    lng: '73.0165566772461',
    lat: '33.5700346784227',
  };
  try {
    
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    // console.log(result)
    setStores(result.deals)
    setFilterStore(result.deals);
    // console.log("my Store",stores)
  } catch (error) {
    console.log(error.message)
  }
}
const getProductData=async()=>{
  const url = `${Api}User/getNearbyDealsProducts`;
  const data = {
    lat: '33.5700346784227',
    lng: '73.0165566772461',
  };
  try {
    
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    // console.log(result)
    setProducts(result.deals);
    setFilterProduct(result.deals);
    // console.log("my producs",products)
  } catch (error) {
    console.log(error.message)
  }
}
useEffect(()=>{
 getProductData();
 getStoreData();
},[])
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.blue}}>
        <StatusBar backgroundColor="blue" />
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.homeHeaderContainer}>
              <View style={styles.userDetailContainer}>
                <TouchableOpacity style={styles.locationSelectContainer}>
                  <View style={styles.locationIconContainer}>
                    <Entypo
                      size={responsiveFontSize(4)}
                      color={Colors.white}
                      name="location-pin"
                    />
                  </View>
                  <View>
                    <View style={styles.locationSelectContainer}>
                      <Text style={styles.currentLocationText}>
                        Current Location
                      </Text>
                      <AntDesign
                        size={responsiveFontSize(2)}
                        color={Colors.white}
                        name="caretdown"
                      />
                    </View>
                    <Text style={styles.addressText}>New York USA</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.locationIconContainer}>
                  <Image
                    source={AppImages.userDummy}
                    style={styles.userImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.searchContainer}>
                <View style={styles.locationSelectContainer}>
                  <TouchableOpacity>
                    <Feather
                      size={responsiveFontSize(4)}
                      color={'rgba(255,255,255,0.7)'}
                      name="search"
                    />
                  </TouchableOpacity>
                  <TextInput
                    // onChangeText={handleSearch}
                    onChangeText={handleSearch}
                    // value={search}
                    onEndEditing={() => console.log('submitted')}
                    placeholder="Search any shop or product..."
                    style={styles.searchText}
                    placeholderTextColor={Colors.white}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                <TouchableOpacity style={styles.filterContainer}>
                  <SimpleLineIcons
                    size={responsiveFontSize(3)}
                    color={Colors.blue}
                    name="equalizer"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* {-------------------------------} */}

            <View style={styles.listHeaderContainer}>
              {/* <Text>we have found {results.lenght} results</Text> */}
              <Text style={styles.headerText}>
                Great Deals on items near you
              </Text>

              <Text style={styles.seeAllText}>See All</Text>
            </View>
            <DealItems Data={filterProduct}/>
            <View style={styles.listHeaderContainer}>
              <Text style={styles.headerText}>Promotions nearby you</Text>
              <Text style={styles.seeAllText}>See All</Text>
            </View>
            <PromotionItems Data={filterstore} />
            <InviteCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default MainHomeScreen;
