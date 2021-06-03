import React, {useLayoutEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';

import Button from '../../components/Button';

const PaymentScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => <HeaderBack onPress={() => { navigation.navigate('Home') }} />
    })
  })
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 250,
          height: 100,
          backgroundColor: '#000000',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#ff9f1c', fontSize: 22 }}>Order Payment Screen</Text>
      </View>
      <View style={{paddingTop: 20}}></View>
      <Button
        text="Go to Confirmed Screen" 
        onPress={() => {
          navigation.push('Confirmed');
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PaymentScreen;
