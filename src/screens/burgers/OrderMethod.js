import React, {useLayoutEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight'; 
import HeaderLanguageChange from '../../components/HeaderLanguageChange';


const OrderMethod = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => (<HeaderLanguageChange onPress={() => (Alert.alert('Do something'))} />)
    })
  })
  return (
    <Background>
      
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default OrderMethod;
