import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';

import Colors from '../constants/colors';
import Form from '../../components/auth-form';
import NavLink from '../../components/nav-link';

const SignUp = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form
        headerText="Sign Up"
        placeholder1="user@gmail.com"
        placeholder2="password"
        placeholderTextColor={Colors.greyishWhite}
        keyboardType="email"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
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
