import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window');

const Background = ({params}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_shadow}></View>

      <View style={styles.bottom_shadow}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  top_shadow: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#f5f5f7',
    width: width,
    height: 10,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  }
});

export default Background

