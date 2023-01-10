import React from 'react';
import {Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import Colors from '../../services/constants/colors';

const Form = ({
  headerText,
  placeholder1,
  placeholder2,
  placeholderTextColor,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  value,
  onChangeText,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{headerText}</Text>
      <TextInput
        placeholder={placeholder1}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        style={styles.input}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        value={value}
        onChangeText={onChangeText}
      />

      <TextInput
        placeholder={placeholder2}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        style={styles.input}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry
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

export default Form;
