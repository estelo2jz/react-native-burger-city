import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Cell from '../../components/Cell';

const { width, height } = Dimensions.get('window');

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
      name: 'Breakfast Bacon Burger',
      price: '4.99 $',
      logo: require("../../../assets/images/burger/burger128.png"),
      icon: require("../../../assets/images/right-arrow.png"),
      isNew: true
    },
    {
      id: 2,
      name: 'Veggie Burger',
      price: '8.99 $',
      logo: require("../../../assets/images/burger/burger1.png"),
      icon: require("../../../assets/images/right-arrow.png"),
      isNew: true
    },
    {
      id: 3,
      name: 'Thick Burger',
      price: '11.99 $',
      logo: require("../../../assets/images/burger/burger2.png"),
      icon: require("../../../assets/images/right-arrow.png"),
      isNew: false
    },
    {
      id: 4,
      name: 'Italian Burger',
      price: '7.99 $',
      logo: require("../../../assets/images/burger/burger3.png"),
      icon: require("../../../assets/images/right-arrow.png"),
      isNew: true
    },
    {
      id: 5,
      name: 'Lean Burger',
      price: '20.99 $',
      logo: require("../../../assets/images/burger/burger4.png"),
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
        <View style={{ flexDirection: 'row' }}>
          <ImageBackground
            source={item.logo}
            style={{ width: 60, height: 50, justifyContent: 'flex-start', alignItems: 'flex-end' }}
          >
            {item.isNew ? <Image source={require('../../../assets/images/new.png')} /> : <View />}
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 10 }}>
          <View>
            <Text style={{
              fontFamily: 'MontserratBold',
              fontSize: 15,
              lineHeight: 20,
            }}>{item.name}</Text>
          </View>
          <View>
            <Text style={{
              color: '#ff9f1c',
              fontFamily: 'MontserratBold',
              fontSize: 15,
              lineHeight: 20,
            }}>{item.price}</Text>
          </View>
        </View>
      </View>
    )
  }

  const _onItemClick = (item, index) => {
    navigation.push('SelectItemScreen')
  }

  return (
    <ScrollView style={styles.container}>
      <Cell
        style={styles.burgerCell}
        data={burgers}
        renderItem={_renderItem}
        onPress={_onItemClick}
      ></Cell>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  burgerCell: {
    height: 100,
  }
});

export default Burgers;

