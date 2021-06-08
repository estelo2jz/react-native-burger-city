import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';

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

const dateTimeSample = [
  {
    id: 1,
    name: '22/02/2021 11:01:02',
    icon: require('../../../assets/images/calendar.png'),
  },
]

const DeliveryAddressConfirmed = ({ navigation, route }) => {

  const [data, setData] = useState(addresses);
  const [dateTime, setDateTime] = useState(dateTimeSample);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => (<HeaderBack onPress={() => navigation.goBack()} />)
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
      activated: false,
      text: 'Order Now',
      onPress: () => { navigation.push('DeliveryAddressScreen') },
    },
    {
      activated: true,
      text: 'Order in Advance',
      onPress: () => { },
    }
  ];

  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <Title subTitle="To proceed, please confirm your delivery details" />
          <GroupButton activeColor={'#ff9f1c'} buttons={buttons}>{buttons}</GroupButton>
          <Title title="Delivery Address"></Title>
          <Cell
            data={data}
            renderItem={_renderItem}
            onPress={() => Alert.alert('Go to Change Address Screen')}
          ></Cell>
          <View style={{ marginLeft: 50, marginRight: 20, marginTop: 10 }}>
            <Button
              text="Change Address"
              style={{ backgroundColor: '#000000' }}
              onPress={
                () => { Alert.alert("hello") }
              }
            />
          </View>
          <Title title="Delivery Date & Time" subTitle="PLease select delicry Data & Time"></Title>
          <Cell
            data={dateTime}
            renderItem={_renderItem}
            onPress={() => Alert.alert('Go to Change Address Screen')}
          ></Cell>
          <View style={{ marginLeft: 50, marginRight: 20, marginTop: 10, marginBottom: 50 }}>
            <Button
              text="Proceed to Order (Now)"
              style={{ backgroundColor: '#000000' }}
              onPress={
                () => { Alert.alert("hello") }
              }
            />
          </View>
        </View>
      </Background>
    </ScrollView>
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

export default DeliveryAddressConfirmed;
