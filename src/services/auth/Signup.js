import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../constants/colors';
import NavLink from '../../components/nav-link';
import RouteNames from '../constants/route-names';
import { useDispatch } from 'react-redux';
import { updateUserId, updateUserToken } from '../../storage/Reducer';

const SignUp = ({navigation}) => {
  const dispatch=useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@User_Token', value);
      console.log('added successfully');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill out all fields');
      return;
    }
    try {
      const response = await fetch(
        `https://project-production-7b65.up.railway.app/User/userSignup`,
        {
          method: 'POST',
          body: JSON.stringify({
            firstName,
            lastName,
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
        console.log(json);
        
        // await  AsyncStorage.setItem('@User_Token',json.token.toString() )
        // dispatch(updateUserToken(json.token.toString()))
        // await  AsyncStorage.setItem('@User_Id',json._id ) 
        // dispatch(updateUserId(json._id))
        navigation.navigate(RouteNames.LoginScreen);
      } else {
        alert(json.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        placeholder="First Name"
        placeholderTextColor={Colors.greyishWhite}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={firstName}
        onChangeText={newFirstName => setFName(newFirstName)}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor={Colors.greyishWhite}
        style={styles.input}
        autoCorrect={false}
        value={lastName}
        onChangeText={newLastName => setLName(newLastName)}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor={Colors.greyishWhite}
        keyboardType="email"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={Colors.greyishWhite}
        keyboardType="password"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        secureTextEntry
      />

      <TouchableOpacity
        title="Sign Up"
        style={styles.btn}
        onPress={handleSubmit}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <NavLink routeName="Login" text="Already have an account? Log in" />
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

export default SignUp;
