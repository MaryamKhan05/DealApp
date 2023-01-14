//import liraries
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  SafeAreaView,
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
import AppImages from '../../assets/images';
const EditProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
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
            <Text style={styles.addressText}>Edit Profile</Text>
          </View>
          <View
            style={styles.optionContainer}
            onPress={() => navigation.navigate(RouteNames.editProfileScreen)}>
            <View style={styles.row}>
              <Icon
                type="font-awesome"
                color={Colors.grey}
                size={responsiveFontSize(3)}
                name="user"
              />
              <TextInput
                style={[
                  styles.optionText,
                  {height: responsiveHeight(5), width: responsiveWidth(70)},
                ]}
                placeholderTextColor={Colors.grey}
                placeholder="Name"
              />
            </View>
          </View>
          <View
            style={styles.optionContainer}
            onPress={() => navigation.navigate(RouteNames.editProfileScreen)}>
            <View style={styles.row}>
              <Icon
                type="material-community"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="email-outline"
              />
              <TextInput
                style={[
                  styles.optionText,
                  {height: responsiveHeight(5), width: responsiveWidth(70)},
                ]}
                placeholderTextColor={Colors.grey}
                placeholder="Email"
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.optionContainer, {borderColor: Colors.blue}]}
            onPress={() => navigation.navigate(RouteNames.editPasswordScreen)}>
            <View style={styles.row}>
              <Icon
                type="evil-icon"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="lock"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Edit Password
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.blue}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButtonContainer}>
            <Text style={[styles.addressText, {marginBottom: 0}]}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default EditProfileScreen;
