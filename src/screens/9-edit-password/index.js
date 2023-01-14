//import liraries
import React, {Component, useState} from 'react';
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
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AppImages from '../../assets/images';
const EditPasswordScreen = ({navigation}) => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
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
            <Text style={styles.addressText}>Edit Password</Text>
          </View>
          <View
            style={styles.optionContainer}
            onPress={() => navigation.navigate(RouteNames.editProfileScreen)}>
            <View style={styles.row}>
              <Icon
                type="evil-icon"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="lock"
              />
              <TextInput
                secureTextEntry={showOldPassword}
                style={styles.optionText}
                placeholderTextColor={Colors.grey}
                placeholder="Enter Old Password"
              />
            </View>
            <TouchableOpacity
              onPress={() => setShowOldPassword(!showOldPassword)}>
              <Icon
                type="entypo"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name={showOldPassword ? 'eye' : 'eye-with-line'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={styles.optionContainer}
            onPress={() => navigation.navigate(RouteNames.editProfileScreen)}>
            <View style={styles.row}>
              <Icon
                type="evil-icon"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="lock"
              />
              <TextInput
                secureTextEntry={showNewPassword}
                style={styles.optionText}
                placeholderTextColor={Colors.grey}
                placeholder="Enter New Password"
              />
            </View>
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}>
              <Icon
                type="entypo"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name={showNewPassword ? 'eye' : 'eye-with-line'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={styles.optionContainer}
            onPress={() => navigation.navigate(RouteNames.editProfileScreen)}>
            <View style={styles.row}>
              <Icon
                type="evil-icon"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="lock"
              />
              <TextInput
                secureTextEntry={showNewPassword}
                style={styles.optionText}
                placeholderTextColor={Colors.grey}
                placeholder="Confirm Password"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.saveButtonContainer}>
            <Text style={[styles.addressText, {marginBottom: 0}]}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default EditPasswordScreen;
