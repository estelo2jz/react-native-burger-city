import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Title from '../../components/Title';
import Cell from '../../components/Cell';
import Button from '../../components/Button';
import Card from '../../components/Card';
import DeliveryAddress from './DeliveryAddress';

const remarks = [
  {
    id: 1,
    name: 'Eg. More ketchup: more drinking straws',
  },
]

const condiments = [
  {
    id: 1,
    name: 'Select Your Condiments',
  },
]

const FullItems = ({ navigation, route }) => {

  const [text, onChangeText] = React.useState("Useless Text");
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
          <View style={styles.summaryView}>
            <View style={{margin: 20}}>
              <Text style={styles.title}>Review & Comfirm</Text>
              <View style={{ alignItems: 'flex-end'}}>
                <Text style={styles.itemText}>Summary</Text>
              </View>
              <View style={styles.itemView}>
                <Text style={styles.itemText}>Subtotal</Text>
                <Text style={styles.priceText}>$ 13.99</Text>
              </View>
              <View style={styles.itemView}>
                <Text style={styles.itemText}>Delivery Charge</Text>
                <Text style={styles.priceText}>$ 4.99</Text>
              </View>
              <View style={styles.itemView}>
                <Text style={styles.itemText}>Promo Code Discount</Text>
                <Text style={styles.priceText}>$ 1.99</Text>
              </View>
            </View>
          </View>

          <View style={styles.totalView}>
            <View style={{margin: 20}}>
              <View style={styles.itemView}>
                <Text style={styles.itemText}>Total</Text>
                <Text style={[styles.priceText, {fontSize: 18}]}>$ 19.99</Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={[styles.itemText, {color: '#ffffff', fontSize: 12,}]}>Total (Includes TAX)</Text>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 18}}></View>

          <View style={styles.addressView}>
            <View style={{margin: 20,}}>
              <Text style={styles.title}>Delivery By</Text>
              <Text style={styles.itemText}>19 / 20 / 2021 02:30:00 PM</Text>
              <Text style={[styles.itemText, {color: '#ffffff'}]}>4202 Hickory Hills Dr, 212</Text>
            </View>
          </View>

          <Title
            title="Remarks"
          />
          <View style={{ marginTop: 8 }}>
            <Cell
              data={remarks}
              renderItem={_renderItem}
              onPress={_onItemClick}
            />
            {/* <TextInput
              style={styles.input}
              value={text}
              onChangeText={onChangeText}
              placeholder="Enter your promo code"
              keyboardType="numeric"
            /> */}
          </View>

          <Card />

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
           <Button text="Confirm" onPress={() => { navigation.navigate('Payment')}} />
          </View>
        </ScrollView>
      </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  summaryView: {
    height: 190,
    backgroundColor: '#1d2126',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 18,
    lineHeight: 24,
  },
  itemView: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemText: {
    color: '#ff9f1c',
    fontFamily: 'MontserratBold',
    fontSize: 15,
    lineHeight: 20,
  },
  priceText: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 15,
    lineHeight: 20,
  },
  totalView: {
    height: 70,
    backgroundColor: '#11191e',
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
  addressView: {
    height: 90,
    backgroundColor: '#000000',
    justifyContent: 'center',
  }
})

export default FullItems;