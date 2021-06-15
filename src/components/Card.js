import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image source={require('../../assets/images/burger/meal1.png')} />
        </View>
        <View style={{justifyContent: 'center', marginLeft: 90}}>
          <Text style={{color: '#000000', fontSize: 14, lineHeight: 19,}}>1 Cheese Burger meal</Text>
          <Text style={{color: '#727c8e', fontSize: 14, lineHeight: 19,}}>Cheese Burger</Text>
          <Text style={{color: '#727c8e', fontSize: 14, lineHeight: 19,}}>Fires (L)</Text>
          <Text style={{color: '#727c8e', fontSize: 14, lineHeight: 19,}}>Coca Cola (250ml)</Text>
          <Text style={{color: '#727c8e', fontSize: 14, lineHeight: 19,}}>No Add on</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', marginRight: 10, marginBottom: 20}}>
        <Text style={{ color: '#ff9f1c', fontFamily: 'MontserratBold', fontSize: 15, lineHeight: 20}}>$ 13.99</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#ffffff',
  }
});

export default Card

