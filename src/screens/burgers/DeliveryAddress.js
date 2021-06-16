import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Title from '../../components/Title';
import Cell from '../../components/Cell';
import Button from '../../components/Button';
import GroupButton from '../../components/GroupButton';

const addresses = [
  {
    id: 1,
    name: 'No. 02,  6th Lane, Colombo 03',
    selected: false,
    icon: require('../../../assets/images/edit16.png'),
  },
]

const DeliveryAddress = ({ navigation, route }) => {

  const [data, setData] = useState(addresses);

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

  const buttons = [
    {
      activated: true,
      text: 'Order Now',
      onPress: () => {

      },
    },
    {
      activated: false,
      text: 'Order in Advance',
      onPress: () => {
        navigation.push('DeliveryAddressConfirmedScreen')
      },
    }
  ];

  return (
    <View style={styles.container}>
      <Title subTitle="To proceed, please confirm your delivery details" />
      <GroupButton activeColor={'#ff9f1c'} buttons={buttons}>{buttons}</GroupButton>
      <Title title="Delivery Address"></Title>
      <Cell
        data={data}
        renderItem={_renderItem}
        onPress={() => Alert.alert('Go to Change Address Screen')}
      ></Cell>
      <View style={{ marginLeft: 50, marginRight: 20, marginTop: 100 }}>
        <Button
          text="Proceed to Order (Now)"
          style={{ backgroundColor: '#000000' }}
          onPress={
            () => { navigation.push('MenuScreen') }
          }
        />
        <Button
          text="Change Address"
          style={styles.blackBtn}
          onPress={
            () => { Alert.alert("hello") }
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackBtn: {
    backgroundColor: '#000000'
  }
})

export default DeliveryAddress;
