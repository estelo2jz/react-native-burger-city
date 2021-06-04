import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window');

const Background = ({params, children, style, ...rest}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_shadow}></View>
        {children}
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
    top: -5,
    backgroundColor: '#f5f5f7',
    width: width,
    height: 5,
    shadowColor: '#000000',
    // backgroundColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  bottom_shadow: {
    position: 'absolute',
    bottom: -5,
    backgroundColor: '#f5f5f7',
    width: width,
    height: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  }
});

export default Background

