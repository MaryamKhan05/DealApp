import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import Colors from '../../services/constants/colors';

const NavLink = ({text, routeName}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: Colors.white,
    marginTop: 10,
    fontSize: 20,
    marginBottom:20
  },
  btn: {
    // marginTop: 20,
  },
});

export default NavLink;
