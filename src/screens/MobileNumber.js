import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import Input from '../components/Input';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const title = 'Forget password';
const tip = 'A text message with a 4-digit verification code was just sent to xxx xxx xx89';

const MobileNumber = ({ params }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/burger1.jpeg')}
        style={{ width: width, height: height }}
      >
        <View style={styles.darkLayer}></View>
        <View style={styles.logo}>
          {/* 64 px size logo */}
          <Image source={require('../../assets/images/burger64.png')} />
          <Text style={styles.logoTitle}>Burger Joint</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.tip}>
          <Text style={styles.tipText}>{tip}</Text>
        </View>
        <View style={styles.input}>
          {/* png size = 24px */}
          <Input
            icon={require('../../assets/images/smartphone24.png')}
            placeholder='Mobile number'
            pasword
          />
        </View>
        <View style={{ marginTop: 37, justifyContent: 'center', alignItems: 'center' }}>
          <Button text="Preceed" />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkLayer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    opacity: 0.4,
  },
  logo: {
    marginTop: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTitle: {
    fontFamily: 'MontserratBold',
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '600',
  },
  title: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 22,
  },
  tip: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipText: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 16,
    textAlign: 'center'
  },
  input: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  remember: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.8,
  },
  rememberText: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 12,
  },
  forgot: {
    color: "#ffffff",
    fontFamily: 'MontserratBold',
    fontSize: 12,
  },
  signup: {
    marginTop: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#ff9f1c',
    fontFamily: 'MontserratBold',
    fontSize: 12,
  },
  terms: {
    marginTop: 10,
    marginRight: 80,
    marginLeft: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 10,
    textAlign: 'center',
  }
})

export default MobileNumber;
