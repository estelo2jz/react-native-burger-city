import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Title from '../../components/Title';

const Menu = ({ params, navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          onPress={() => { navigation.navigate('wallet') }}
        />
      ),
      headerLeft: () => (
        <HeaderBack
          onPress={() => { navigation.goBack() }}
        />
      )
    })
  })

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.addressView}>
          <Title 
            title="Delivery Address" 
            subTitle="No. 02, 6th Lane, Colomo 03"
            titleColor="#ffffff"
            subTitleColor="#ff9f1c"
          ></Title>
        </View>
        <View style={styles.dateTimeView}>
          <Title 
            title="Delivery Date & Time" 
            subTitle="No. 02, 6th Lane, Colomo 03"
            titleColor="#ffffff"
            subTitleColor="#ff9f1c"e
          ></Title>
        </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressView: {
    height: 115,
    backgroundColor: '#1d2126',
  },
  dateTimeView: {
    height: 85,
    backgroundColor: '#1c272e',
  }
});

export default Menu

