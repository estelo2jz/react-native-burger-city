// rncsl

import React from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, Image } from 'react-native';

const {width, height} = Dimensions.get('window');

const Input = ({
    params, placeholder, icon, password, ...rest
}) => (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={icon} />
      </View>
        <TextInput
          style={styles.input}
          secureTextEntry={password}
          placeholder={placeholder}
        >
        </TextInput>
    </View>
);

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    color: '#727cbe',
    fontFamily: 'MontserratBold',
    fontWeight: '500',
    fontSize: 12,
    paddingLeft: 15,
  }
})

export default Input;
