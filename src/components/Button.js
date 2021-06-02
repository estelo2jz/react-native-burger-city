import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({ text, onPress,...params}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 6,
    backgroundColor: '#ff9f1c',
  },
  text: {
    fontFamily: 'MontserratRegular',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  }
})

export default Button;
