import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Cell from '../../components/Cell';

const { width, height } = Dimensions.get('window');

const SelectItem = ({ params, navigation, route }) => {

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
      name: 'Chicken Bacon Burger',
      price: '4.99 $',
      logo: require("../../../assets/images/burger/burger128.png"),
      icon: require("../../../assets/images/right-arrow.png"),
      isNew: true,
      category: 'Ala Carte'
    },
    {
      id: 2,
      name: 'Veggie Burger',
      price: '8.99 $',
      logo: require("../../../assets/images/burger/burger1.png"),
      icon: require("../../../assets/images/right-arrow.png"),
      isNew: true,
      category: 'Ala Carte'
    },
  ]

  const _renderItem = (item, index) => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
       alignItems: 'center',
      }}>
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
            }}>{item.category}</Text>
          </View>
        </View>
      </View>
    )
  }

  const _onItemClick = (item, index) => {
    navigation.push('ChoicesScreen')
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <Title 
            title="Chicken Burgers"
            subTitle="Please select your burger type"
          />
          <View style={{marginTop: 48, marginLeft: 30, marginRight: 20, marginBottom: 20, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../../assets/images/burger/burgerlogo.png')} />
          </View>

          <Cell
            style={styles.burgerCell}
            data={burgers}
            renderItem={_renderItem}
            onPress={_onItemClick}
          ></Cell>
        </View>
      </Background>
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

export default SelectItem;

