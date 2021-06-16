import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Title from '../../components/Title';
import Cell from '../../components/Cell';
import Button from '../../components/Button';
import DeliveryAddress from './DeliveryAddress';

const methods = [
  {
    id: 1,
    name: 'In-Store',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 2,
    name: 'Delivery',
    selected: true,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 3,
    name: 'Drive Thru',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
]

const OrderMethod = ({ navigation, route }) => {

  const [data, setData] = useState(methods);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => (<HeaderLanguageChange onPress={() => (Alert.alert('Do something'))} />)
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

  return (
    <View style={styles.container}>
      <Title title='Order Method' subTitle="Please select your order method" />
      <View style={{ marginTop: 8 }}>
        <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
      </View>
      <View style={{ marginLeft: 50, marginRight: 20, marginTop: 40 }}>
        <Button text="Proceed to Order" onPress={() => navigation.push('DeliveryAddressScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000'
  }
})

export default OrderMethod;