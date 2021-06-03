import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const HeaderLanguageChange = ({onPress,params}) => {
  return (
    <TouchableOpacity style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
      onPress={onPress}
    >
      <Text style={{ fontFamily: 'MontserratBold', color: '#ff9f1c', fontSize: 18}}>EN</Text>
      <Image style={{ marginLeft: 3 }} source={require('../../assets/images/drop-down16.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
});

export default HeaderLanguageChange;

