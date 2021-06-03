import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HeaderTitle = () => {
  return (
    <View>
      <Image source={require('../../assets/images/burger24logo.png')} />
      {/* <Text>Burger Joint</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})

export default HeaderTitle

