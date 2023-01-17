import React, {useState, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Colors from '../../services/constants/colors';
import RouteNames from '../../services/constants/route-names';
import {ScrollView} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import AppImages from '../../assets/images';
import HotDealItems from '../../components/hot-deal-items';
import SearchContext from '../../context/searchContext';

const StoreDetailScreen = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [ModalVisible2, setModalVisible2] = useState(false);
  const value = useContext(SearchContext); 

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!ModalVisible2);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.blue}}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
          {/* <Text>{value}</Text> */}
        <View style={styles.container}>
          <View style={styles.homeHeaderContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                type="ant-design"
                color={Colors.white}
                size={responsiveFontSize(3)}
                name="arrowleft"
                style={styles.backButton}
              />
            </TouchableOpacity>
            <Text style={styles.addressText}>Store Details</Text>
          </View>

          <Button
            style={{marginBottom: 20}}
            title="Show modal"
            onPress={toggleModal}
          />
          <Button
            style={{marginBottom: 20}}
            title="Show modal 2"
            onPress={toggleModal2}
          />

          <Modal isVisible={isModalVisible}>
            <View
              style={{
                height: '85%',
                width: '97%',
                backgroundColor: Colors.white,
                borderRadius: 8,
              }}>
              <ImageBackground
                source={require('../../assets/images/modal.png')}
                style={{
                  width: '99%',
                  height: '65%',
                  alignSelf: 'center',
                  borderRadius: 8,
                }}>
                <TouchableOpacity onPress={toggleModal}>
                  <Entypo
                    name="circle-with-cross"
                    color="white"
                    size={30}
                    style={{alignSelf: 'flex-end', margin: 10}}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '-46%',
                  // backgroundColor: Colors.grey,
                  // backgroundColor:Colors.greyishWhite,
                  backgroundColor:'#C4C4C4',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 18,
                    fontStyle: 'normal',
                    marginLeft: 10,
                  }}>
                  Milk Pack
                </Text>
                <AntDesign
                  name="heart"
                  size={30}
                  color={Colors.white}
                  style={{marginRight: 10}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  margin: 10,
                  borderRadius: 10,
                  padding: 5,
                  width: 318,
                  height: 68,
                  borderWidth: 1,
                  borderColor: '#DFE5F3',
                }}>
                <View
                  style={{
                    backgroundColor: '#D7EEFF',
                    height: 48,
                    width: 44,
                    alignSelf: 'center',
                    marginHorizontal: 5,
                  }}></View>
                <View style={{flexDirection: 'column'}}>
                  <Text>Store Name</Text>
                  <Text>Click to View available Branches</Text>
                  <Text style={{color: Colors.orange}}>$ 20</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.blue,
                    borderRadius: 10,
                    height: 20,
                    width: 45,
                    alignItems: 'center',
                    marginRight: 50,
                  }}>
                  <Text style={{color: Colors.white}}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Modal isVisible={ModalVisible2}>
            <View
              style={{
                height: '85%',
                width: '97%',
                backgroundColor: Colors.white,
                borderRadius: 8,
              }}>
              <ImageBackground
                source={require('../../assets/images/modal.png')}
                style={{
                  width: '99%',
                  height: '65%',
                  alignSelf: 'center',
                  borderRadius: 8,
                }}>
                <TouchableOpacity onPress={toggleModal2}>
                  <Entypo
                    name="circle-with-cross"
                    color="white"
                    size={30}
                    style={{alignSelf: 'flex-end', margin: 10}}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '-46%',
                  // backgroundColor: Colors.grey,
                  // backgroundColor:Colors.greyishWhite,
                  backgroundColor:'#C4C4C4',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 18,
                    fontStyle: 'normal',
                    marginLeft: 10,
                  }}>
                  Milk Pack
                </Text>
                <AntDesign
                  name="heart"
                  size={30}
                  color={Colors.white}
                  style={{marginRight: 10}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  margin: 10,
                  borderRadius: 10,
                  padding: 5,
                  width: 318,
                  height: 68,
                  borderWidth: 1,
                  borderColor: '#DFE5F3',
                }}>
                <View
                  style={{
                    backgroundColor: '#D7EEFF',
                    height: 48,
                    width: 44,
                    alignSelf: 'center',
                    marginHorizontal: 5,
                  }}></View>
                <View style={{flexDirection: 'column'}}>
                  <Text>Store Name</Text>
                  <Text>Click to View available Branches</Text>
                  <Text style={{color: Colors.orange}}>$ 20</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.blue,
                    borderRadius: 10,
                    height: 20,
                    width: 45,
                    alignItems: 'center',
                    marginRight: 50,
                  }}>
                  <Text style={{color: Colors.white}}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View>
            <View style={styles.storeDetailsContainer}>
              <Image
                style={styles.storeImage}
                source={AppImages.storeDetailImage}
              />
              <View>
                <Text style={styles.blackText}>FlipCart Store</Text>
                <View style={styles.row}>
                  <Text style={styles.greyText}>(1.9 km away)</Text>
                  <View style={styles.greenDot} />
                  <Text style={styles.greenText}>Open Now</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.greyText,
                    {
                      paddingHorizontal: responsiveFontSize(1.5),
                      borderRightWidth: 1,
                      borderRightColor: Colors.grey,
                    },
                  ]}>
                  Branch
                </Text>
                <Text
                  style={[
                    styles.optionText,
                    {marginLeft: responsiveFontSize(1.5)},
                  ]}>
                  Al - Shuhieen
                </Text>
              </View>
              <Icon
                type="ant-design"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="down"
              />
            </TouchableOpacity>
            <View style={styles.locationSelectContainer}>
              <View style={styles.locationIconContainer}>
                <Icon
                  type="entypo"
                  size={responsiveFontSize(4)}
                  color={Colors.orange}
                  name="location-pin"
                />
              </View>
              <View style={{marginLeft: responsiveWidth(1)}}>
                <Text style={styles.currentLocationText}>
                  Location & Distance
                </Text>
                <Text style={styles.greyText}>
                  Street 36, Guild Wall London, UK
                </Text>
              </View>
            </View>
            <View style={styles.locationSelectContainer}>
              <View style={styles.locationIconContainer}>
                <Icon
                  type="material-community"
                  size={responsiveFontSize(4)}
                  color={Colors.orange}
                  name="clock"
                />
              </View>
              <View style={{marginLeft: responsiveWidth(1)}}>
                <Text style={styles.currentLocationText}>Opening Hours</Text>
                <Text style={styles.greyText}>8PM - 5AM | Sunday Closed</Text>
              </View>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.locationSelectContainer}>
              <TouchableOpacity>
                <Icon
                  type="feather"
                  size={responsiveFontSize(2)}
                  color={Colors.grey}
                  name="search"
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Search in this store..."
                style={styles.searchText}
                placeholderTextColor={Colors.grey}
              />
            </View>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Jump to category"
              style={styles.searchText}
              placeholderTextColor={Colors.grey}
            />
          </View>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                marginHorizontal: responsiveWidth(5),
              },
            ]}>
            <View style={styles.lineView} />
            <View style={styles.row}>
              {/* {-------------------------------} */}
              <Text style={styles.currentLocationText}>🥛 Diary</Text>
            </View>
            <View style={styles.lineView} />
          </View>
          <HotDealItems data={[1, 2, 3, 4]} />
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                marginHorizontal: responsiveWidth(5),
              },
            ]}>
            <View style={styles.lineView} />
            <View style={styles.row}>
              {/* {---------------------} */}
              <Text style={styles.currentLocationText}>🥩 Meat</Text>
            </View>
            <View style={styles.lineView} />
          </View>
          <HotDealItems data={[1, 2, 3, 4]} />
        </View>
        <View style={styles.bottomSheet}>
          <TouchableOpacity
            style={styles.goToStoreButton}
            onPress={() => navigation.navigate(RouteNames.storeLocationScreen)}>
            <Text style={styles.goToStoreText}>Go To Store Location</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default StoreDetailScreen;
