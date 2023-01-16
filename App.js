import React, {Component} from 'react';
import Login from './src/services/auth/Login';
import MainStackNav from './src/services/navigation/main-stack-nav';
import Auth from './src/services/auth/authNav';
import MainHomeScreen from './src/screens/2-main-home';
import FavoritesScreen from './src/screens/6-favorites';
import { configureStore } from '@reduxjs/toolkit';
import { userTokenSlice } from './src/storage/Reducer';
import { Provider } from 'react-redux';

//creating store
const store=  configureStore({
  reducer: userTokenSlice
 })
const App = () => {
  return  (
    <Provider store={store}>

      <MainStackNav />
    </Provider>

  )
  // return <Login/>
//  return <Auth/>;
// return <MainHomeScreen/>
// return <FavoritesScreen/>
};
export default App;
