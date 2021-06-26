import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';

// import Background from '../components/Background';
import HeaderRight from '../components/HeaderRight';
import HeaderBack from '../components/HeaderBack';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const Settings = ({ params, navigation, route }) => {

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

  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        <ImageBackground
          source={require('../../assets/images/burger/burger1.jpeg')}
          style={{flex: 1, height: 700}}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100
            }}
          >
            <Image source={require('../../assets/images/burger64.png')} />
            <Text>Burger Joint</Text>
          </View>
          <View
            style={{
              marginLeft: 50,
              marginRight: 0,
              marginTop: 350,
            }}
          >
            <Button 
              text="Log Out"
              onPress={() => navigation.navigate('Login')}  
            ></Button>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;

