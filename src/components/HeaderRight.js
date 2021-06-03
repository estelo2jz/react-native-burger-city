import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const HeaderRight = ({onPress, ...params}) => {

  return (
    <TouchableOpacity style={{marginRight: 20}} onPress={onPress}>
      <Image source={require('../../assets/images/shopping-cart24.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export default HeaderRight;

