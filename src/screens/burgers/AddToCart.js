import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, Image } from 'react-native';

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
    name: 'Homestyle Fries',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 2,
    name: 'Medium Fries',
    selected: true,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
]

const AddToCart = ({ navigation, route }) => {

  const [data, setData] = useState(choices);

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
      <View style={styles.container}>
        <Title title='Cheese Burger Meal' subTitle="Please custumize your meal" />
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
          <Image source={require('../../../assets/images/burger/meal1.png')} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{width: 140,  height: 48, marginLeft: 10, borderRadius: 6 }}>
            <View style={{ height: 48 ,backgroundColor: '#ffffff' ,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center'  }}>
              <Image source={require('../../../assets/icons/add.png')} style={{marginLeft: 15}} />
              <Text style={{ color: '#727cbe', fontFamily: 'MontserratBold', fontSize: 15, lineHeight: 20 }}>1</Text>
              <Image source={require('../../../assets/icons/minus.png')} style={{ marginRight: 15 }} />
            </View>
          </View>
          {/* width: 186 */}
          <View style={{ width: 186, marginLeft: 20, marginRight: 20 }}>
            <Button text="Add to Cart" onPress={() => {}} />
          </View>
        </View>
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
        </View>
        {/* <View style={{ marginLeft: 20, marginRight: 20, marginTop: 23, justifyContent: 'center', alignItems: 'center' }}>
          <Button text="Proceed to Add Cart" onPress={() => Alert.alert("added to cart")} />
        </View> */}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AddToCart;