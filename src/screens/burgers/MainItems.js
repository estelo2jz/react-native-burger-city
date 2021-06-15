import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Title from '../../components/Title';
import Cell from '../../components/Cell';
import Button from '../../components/Button';
import Card from '../../components/Card';
import DeliveryAddress from './DeliveryAddress';

const includes = [
  {
    id: 1,
    name: 'Enter your promo code',
  },
]

const condiments = [
  {
    id: 1,
    name: 'Select Your Condiments',
  },
]

const MainItems = ({ navigation, route }) => {

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
      <View style={{ height: 65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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

  }

  return (
    <Background>
      <ScrollView style={styles.container}>

        <View style={styles.totalView}>
          <View style={styles.textView}>
            <Text style={styles.totalText}>Sub Total (1 Item)</Text>
            <Text style={styles.priceText}>$ 13.99</Text>
          </View>
        </View>

        <Card />

        <Title
          title="Includes"
        />
        <View style={{ marginTop: 8 }}>
          <Cell
            data={includes}
            renderItem={_renderItem}
            onPress={_onItemClick}
          />
        </View>
        <Title
          title="Condiments"
        />
        <View style={{ marginTop: 8 }}>
          <Cell
            data={condiments}
            renderItem={_renderItem}
            onPress={_onItemClick}
          />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Button text="Check Out" onPress={() => { navigation.push('FullItemsScreen') }} />
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  totalView: {
    height: 90,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  totalText: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 20,
    lineHeight: 24,
  },
  priceText: {
    color: '#ff9f1c',
    fontFamily: 'MontserratBold',
    fontSize: 15,
    lineHeight: 20
  },
})

export default MainItems;