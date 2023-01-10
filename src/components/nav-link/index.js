import { useNavigation } from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import Colors from '../../services/constants/colors';

const NavLink = ({text, routeName}) => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default NavLink;
