import React, {Component} from 'react';
import Login from './src/services/auth/Login';
import MainStackNav from './src/services/navigation/main-stack-nav';
import Auth from './src/services/auth/authNav';
const App = () => {
  return <MainStackNav />;
  // return <Login/>
//  return <Auth/>;
};
export default App;
