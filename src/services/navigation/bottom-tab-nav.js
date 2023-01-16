import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {App} from '../../screens/index';
import RouteNames from '../constants/route-names';
const Tab = createBottomTabNavigator();
import Colors from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const options = {
  headerShown: false,
  tabBarActiveTintColor: Colors.blue,
  inactiveTintColor: Colors.grey,
  tabBarActiveBackgroundColor: Colors.white,
  tabBarInactiveBackgroundColor: Colors.white,
  tabBarStyle: {
    backgroundColor: Colors.white,
    marginBottom: 0,
    height: 70,
    paddingBottom: 20,
    paddingTop: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    borderTopWidth: 0.2,
    position: 'absolute',
    overflow: 'hidden',
    elevation: 15,
  },
};
const HomeBottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        component={App.MainHomeScreen}
        name={RouteNames.homeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Entypo size={size} color={color} name="home" />
          ),
        }}
      />
      <Tab.Screen
        component={App.StoreDetailScreen}
        name={RouteNames.storeDetailScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons size={size} color={color} name="search-circle" />
          ),
        }}
      />
      <Tab.Screen
        component={App.Favorites}
        name={RouteNames.favoriteScreen}
        options={{
          title: 'Favourites',
          tabBarIcon: ({focused, color, size}) => (
            <Entypo size={size} color={color} name="heart" />
          ),
        }}
      />
      <Tab.Screen
        component={App.NearbyShopsScreen}
        name={RouteNames.nearbyShopScreen}
        options={{
          title: 'Nearby',
          tabBarIcon: ({focused, color, size}) => (
            <Entypo size={size} color={color} name="location-pin" />
          ),
        }}
      />
      <Tab.Screen
        component={App.ProfileViewScreen}
        name={RouteNames.profileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome5 size={size} color={color} name="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeBottomTabNavigation;
