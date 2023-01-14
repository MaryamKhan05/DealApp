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
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AppImages from '../../assets/images';
const ProfileViewScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:Colors.blue}}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.homeHeaderContainer}>
            <Text style={styles.addressText}>My Profile</Text>
            <TouchableOpacity style={styles.locationIconContainer}>
              <Image source={AppImages.userDummy} style={styles.userImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.listHeaderContainer}>
            <Text style={styles.userNameText}>Gwen Stacy</Text>
            <Text style={styles.seeAllText}>gwen@gmail.com</Text>
          </View>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => navigation.navigate(RouteNames.editProfileScreen)}>
            <View style={styles.row}>
              <Icon
                type="font-awesome"
                color={Colors.grey}
                size={responsiveFontSize(3)}
                name="user"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Edit Profile
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.grey}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.row}>
              <Icon
                type="font-awesome"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="bell"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Notification
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.grey}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.row}>
              <Icon
                type="font-awesome"
                color={Colors.grey}
                size={responsiveFontSize(2.5)}
                name="heart"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Refer a Friend
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.grey}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.row}>
              <Icon
                type="ionicon"
                color={Colors.grey}
                size={responsiveFontSize(2.75)}
                name="bug"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Report a Bug
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.grey}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.row}>
              <Icon
                type="entypo"
                color={Colors.grey}
                size={responsiveFontSize(2.75)}
                name="help-with-circle"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Help & Support
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.grey}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.row}>
              <Icon
                type="entypo"
                color={Colors.grey}
                size={responsiveFontSize(3)}
                name="info-with-circle"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                About Us
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.grey}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.row}>
              <Icon
                type="font-awesome"
                color={Colors.grey}
                size={responsiveFontSize(3)}
                name="lock"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Privacy Policy
              </Text>
            </View>
            <Icon
              type="ant-design"
              color={Colors.grey}
              size={responsiveFontSize(3)}
              name="right"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.row}>
              <Icon
                type="ionicon"
                color={Colors.grey}
                size={responsiveFontSize(3)}
                name="exit"
              />
              <Text
                style={[
                  styles.optionText,
                  {marginLeft: responsiveFontSize(1.5)},
                ]}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default ProfileViewScreen;
