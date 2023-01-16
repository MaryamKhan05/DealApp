import React from 'react';
import {View, TouchableOpacity, Text, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Colors from '../../services/constants/colors';
import {ScrollView} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AppImages from '../../assets/images';
import PromotionItems from '../../components/promotion-items';
import ProductItems from '../../components/product-items';

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.blue, flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.homeHeaderContainer}>
            <View style={styles.userDetailContainer}>
              <TouchableOpacity style={styles.locationSelectContainer}>
                <View style={styles.locationIconContainer}>
                  <Icon
                    type="entypo"
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
                    <Icon
                      type="ant-design"
                      size={responsiveFontSize(2)}
                      color={Colors.white}
                      name="caretdown"
                    />
                  </View>
                  <Text style={styles.addressText}>New York USA</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.locationIconContainer}>
                <Image source={AppImages.userDummy} style={styles.userImage} />
              </TouchableOpacity>
            </View>
          </View>

          {/* {----------------------------} */}

          <View style={styles.listHeaderContainer}>
            <Text style={styles.headerText}>Favourite Stores</Text>
          </View>
          <PromotionItems />
          <View style={styles.listHeaderContainer}>
            <Text style={styles.headerText}>Favourite Products</Text>
          </View>
          <ProductItems data={[1, 2, 3, 4, 5, 6]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default FavoritesScreen;
