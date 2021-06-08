import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Menu = ({ params, navigation, route }) => {

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

  const categories = [
    {
      id: 1,
      name: 'All values meals',
      image:  require("../../../assets/images/meal1.png"),
    },
    {
      id: 2,
      name: 'Salads/sides',
      image: require("../../../assets/images/salad.png"),
    },
    {
      id: 3,
      name: 'Desserts',
      image: require("../../../assets/images/sweets.png"),
    },
    {
      id: 4,
      name: 'Beverages ',
      image: require("../../../assets/images/drinks.png"),
    }
  ]

  const _renderCategory = (item, index) => {
    return (
      <View 
      key={index}
        style={{ 
          margin: 12, 
          width: 160, 
          height: 160, 
          backgroundColor: '#ffffff',
          borderRadius: 6,
          shadowColor: '#000000',
          shadowOffset: {width: 2, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 5

        }}
      >
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <View style={{height: 100, justifyContent: 'center'}}>
            <Image source={item.image}></Image>
          </View>
          <View style={{ width: 80, paddingTop: 8, alignItems: 'center' }}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'MontserratBold',
                fontSize: 12,
                lineHeight: 16,
              }}
            >{item.name}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <View style={styles.addressView}>
            <Title 
              title="Delivery Address" 
              subTitle="No. 02, 6th Lane, Colomo 03"
              titleColor="red"
              style={{titleColor: '#ffffff'}}
              subTitleColor="#FF9F1C"
            ></Title>
          </View>
          <View style={styles.dateTimeView}>
            <Title 
              title="Delivery Date & Time" 
              subTitle="No. 02, 6th Lane, Colomo 03"
              titleColor="#ffffff"
              subTitleColor="#FF9F1C"
            ></Title>
          </View>
          <View style={styles.category}>
            {
              categories.map((category, index) => {
                return _renderCategory(category, index);
              })
            }
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
            <Button 
              text='Secret Menu' 
              onPress={() => {
                navigation.push('BurgersScreen')
              }} 
            />
          </View>
        </View>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressView: {
    height: 115,
    backgroundColor: '#ffffff',

  },
  dateTimeView: {
    height: 85,
    backgroundColor: '#ffffff',
  },
  category: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
});

export default Menu

