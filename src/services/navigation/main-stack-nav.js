import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigation from "./bottom-tab-nav";
import { App } from '../../screens/index'
import RouteNames from "../constants/route-names";
const Stack = createStackNavigator()
const options = {
    headerShown: false,
}
const MainStackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={RouteNames.splashScreen} >
                <Stack.Screen component={App.SplashScreen} name={RouteNames.splashScreen} options={options} />
                <Stack.Screen component={HomeBottomTabNavigation} name={RouteNames.mainHomeScreen} options={options} />
                <Stack.Screen component={App.StoreDetailScreen} name={RouteNames.storeDetailScreen} options={options} />
                <Stack.Screen component={App.StoreLocationScreen} name={RouteNames.storeLocationScreen} options={options} />
                <Stack.Screen component={App.EditProfileScreen} name={RouteNames.editProfileScreen} options={options} />
                <Stack.Screen component={App.EditPasswordScreen} name={RouteNames.editPasswordScreen} options={options} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStackNavigation