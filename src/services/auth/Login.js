import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {storeToken} from '../../storage/storage';
import {getToken} from '../../storage/storage';
import Colors from '../constants/colors';
import Form from '../../components/auth-form';
import NavLink from '../../components/nav-link';
import RouteNames from '../constants/route-names';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
const Login = ({navigation}) => {
const token= useSelector((state)=>state.userToken)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async value => {
    // console.log('in store');
    try {
      await AsyncStorage.setItem('@User_Token', value);
      console.log('added successfully');
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    
      if (token) {
        navigation.navigate(RouteNames.mainHomeScreen);
      }
    checkToken();
  }, []);
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert('Please fill out all fields');
        return;
      }
      const response = await fetch(
        `https://project-production-7b65.up.railway.app/User/userSignin`,
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      if (json.status === '200') {
        // alert(json.status);
        // storeData(json);
        storeToken(json);

        navigation.navigate(RouteNames.mainHomeScreen);
      } else {
        alert('something went wrong');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form
        headerText="Log In"
        placeholder1="user@gmail.com"
        placeholder2="password"
        placeholderTextColor={Colors.greyishWhite}
        keyboardType="email"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        value2={password}
        onChangeText={newEmail => setEmail(newEmail)}
        onChangeText2={newpass => setPassword(newpass)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
      <NavLink
        routeName={RouteNames.SignUpScreen}
        text="Don't have an account? Sign Up"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 35,
  },
  input: {
    margin: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '80%',
    padding: 12,
    borderColor: Colors.greyishWhite,
    color: Colors.white,
  },
  btnText: {
    color: Colors.white,
    marginTop: 10,
    fontSize: 20,
  },
  btn: {
    marginTop: 20,
  },
});

export default Login;
