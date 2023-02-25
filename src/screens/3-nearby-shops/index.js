import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Image, PermissionsAndroid} from 'react-native';
import AppImages from '../../assets/images';
import NearbyStoreItems from '../../components/nearby-store-items';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {ActivityIndicator} from 'react-native-paper';
import SearchContext from '../../context/searchContext';
import Api from '../../../Api';

const NearbyShopScreen = ({navigation}) => {
  const {productsDeals, storeDeals, setProductDeals} =
    useContext(SearchContext);
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(true);

const getProductData = async () => {
  const url = `${Api}/Admin/getAllOffersData`;
  const data = {
    lat: location.latitude,
    lng: location.longitude,
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
    setProductDeals(result.deals);
    
    // console.log("my producs",products)
  } catch (error) {
    console.log(error.message);
  }
};




  const requestFollowPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
            setIsLoading(false);
            console.log('here im WITH LOCATION', location);
          },
          error => console.log(error),
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestFollowPermission();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image source={AppImages.mapImage} /> */}
      {!isLoading ? (
        <MapView
          style={[styles.container,{flex:1}]}
          // style={{flex: 1}}
          mapType="terrain"
          initialRegion={location}
          showsUserLocation={true}
          showsMyLocationButton={true}
          enableZoomControl={true}
          provider={'google'} // use 'google' for Google Maps, 'apple' for Apple Maps
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          loadingEnabled={true}
          showsCompass={true}
          showsBuildings={false}
          showsTraffic={true}
          showsIndoors={true}
          showsIndoorLevelPicker={true}
          rotateEnabled={true}
          pitchEnabled={true}
          toolbarEnabled={true}
          // cacheEnabled={true}
          loadingIndicatorColor={'#666666'}
          loadingBackgroundColor={'#eeeeee'}
          moveOnMarkerPress={true}
          showsMyLocationButton={true}
          showsPointsOfInterest={true}
          showsScale={true}
          showsBuildings={true}
          // apiKey={'AIzaSyADJCY8VXgveXoWUbQpJbW-Bpb_adiAjLo'} // API key for the map service
        >
          {productsDeals?.map(item => (
            <Marker
              coordinate={{
                latitude: item.location?.coordinates[1],
                longitude: item.location?.coordinates[0],
                
              }}
            />
          ))}
        </MapView>
      ) : (
        <ActivityIndicator style={{flex: 1}} />
      )}

      <View style={styles.bottomSheet}>
        <NearbyStoreItems data={productsDeals} navigation={navigation} />
      </View>
    </View>
  );
};
export default NearbyShopScreen;
