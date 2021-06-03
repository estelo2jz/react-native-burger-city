import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const HeaderBack = ({onPress, params}) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={onPress}
    >
      <Image source={require("../../assets/images/back.png")} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
})

export default HeaderBack

