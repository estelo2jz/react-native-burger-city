import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Cell from '../../components/Cell';

const Burgers = ({ params, navigation, route }) => {

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
      ),
    });
  });

  const burgers = [
    {
      id: 1,
      name: 'Chicken Big Burger',
      price: '4.99 $',
      logo: require("../../../assets/images/burger/cheese-burger.png"),
      icon: require("../../../assets/images/right-arrow.png"),
      isNew: true
    },
  ]

  const _renderItem = (item, index) => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={item.logo} />
        <Image source={require('../../../assets/images/new.png')} />
        <View>
          <View>
            <Text style={{
              fontFamily: 'MontserratBold',
              fontSize: 15,
              lineHeight: 20,
              marginLeft: 10,
            }}>{item.name}</Text>
          </View>
          <View>
            <Text style={{
              color: '#ff9f1c',
              fontFamily: 'MontserratBold',
              fontSize: 15,
              lineHeight: 20,
              marginLeft: 10,
            }}>{item.price}</Text>
          </View>
        </View>
      </View>
    )
  }

  const _onItemClick = (item, index) => {

  }

  return (

      <Background>
        <View style={styles.container}>
          <Cell
            style={{height: 86}}
            data={burgers}
            renderItem={_renderItem}
            onPress={_onItemClick}
          ></Cell>
        </View>
      </Background>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Burgers;

