import React, {useLayoutEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderRight from '../../components/HeaderRight'; 
import HeaderLanguageChange from '../../components/HeaderLanguageChange';


const BurgersScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => (<HeaderLanguageChange onPress={() => (Alert.alert('Do something'))} />)
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

        <Text style={{ color: '#ff9f1c', fontSize: 22 }}>Burgers Screen</Text>
      </View>
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

export default BurgersScreen;
