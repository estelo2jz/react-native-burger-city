import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Title from '../../components/Title';
import Cell from '../../components/Cell';
import Button from '../../components/Button';
import DeliveryAddress from './DeliveryAddress';

const choices = [
  {
    id: 1,
    name: 'Cheese Burger',
    icon: require('../../../assets/images/right-arrow.png'),
    logo: require('../../../assets/images/cheese24.png'),
  },
  {
    id: 2,
    name: 'Coca cola (250ml)',
    icon: require('../../../assets/images/right-arrow.png'),
    logo: require('../../../assets/images/cola24.png'),
  },
  {
    id: 3,
    name: 'Fries (L)',
    icon: require('../../../assets/images/right-arrow.png'),
    logo: require('../../../assets/images/fries24.png'),
  },
]

const AddToCart = ({ navigation, route }) => {

  const [data, setData] = useState(choices);
  const [count, setCount] = useState(1);

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
  })

  const _renderItem = (item, index) => {
    return (
      <View style={{ height: 65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ width: 67, height: 43, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={item.logo} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text
            key={item.id}
            style={{
              fontFamily: 'MontserratBold',
              fontSize: 15,
              lineHeight: 20,
            }}
          >
            {item.name}
          </Text>
        </View>
      </View>
    )
  }

  const _onItemClick = (item, index) => {
    let temp = [];
    data.map((entry, idx) => {
      if (idx === index) {
        entry.selected = true;
        temp.push(entry);
      } else {
        entry.selected = false;
        temp.push(entry)
      }
    });
    setData(temp);
  }

  return (
      <Background>
        <ScrollView style={styles.container}>
          <Title title='Cheese Burger Meal' subTitle="Please custumize your meal" />
          <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
            <Image source={require('../../../assets/images/burger/meal1.png')} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{width: 140,  height: 48, marginLeft: 10, borderRadius: 6 }}>
              <View style={{ height: 48 ,backgroundColor: '#ffffff' ,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center'  }}>
                <TouchableOpacity onPress={() => {
                  count <= 1 ? setCount(0) : setCount(count - 1)
                }}>
                  <Image source={require('../../../assets/icons/add.png')} style={{marginLeft: 15}} />
                </TouchableOpacity>
                <Text style={{ color: '#727cbe', fontFamily: 'MontserratBold', fontSize: 15, lineHeight: 20 }}>{count}</Text>
                <TouchableOpacity onPress={() => {
                  setCount(count + 1)
                }}>
                  <Image source={require('../../../assets/icons/minus.png')} style={{ marginRight: 15 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ width: 186, marginLeft: 115, marginRight: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <Button text="Add to Cart" onPress={() => {navigation.push('MainItemsScreen')}} />
          </View>
          <Title 
            title="Includes"
          />
          <View style={{ marginTop: 8 }}>
            <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
          </View>
          {/* <View style={{ marginLeft: 20, marginRight: 20, marginTop: 23, justifyContent: 'center', alignItems: 'center' }}>
            <Button text="Proceed to Add Cart" onPress={() => Alert.alert("added to cart")} />
          </View> */}
        </ScrollView>
      </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AddToCart;