import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import Input from '../components/Input';

const { width, height} = Dimensions.get('window');

const title = 'Welcome back!';
const tip = ' Login to continue Burger Joint';
const signup = 'New user? Sign up';
const terms = 'By signing up you indicate that you have read and agreed to the Patch Terms of Service'

const Login = ({params}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/burger1.jpeg')}
        style={{width: width, height: height}}
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
            icon={require('../../assets/images/mail1.png')}
            placeholder='Email address'
          />
          <View style={{ paddingTop: 18 }} />
          <Input
            icon={require('../../assets/images/padlock.png')}
            placeholder='Password'
          />
        </View>
        <View style={styles.remember}>
          <View>
            <RadioGroup size={16} thickness={2} color={'#ffffff'} >
            <RadioButton color={'#ffffff'} value={''}>
                <Text style={styles.rememberText}>Remember me</Text>
              </RadioButton>
            </RadioGroup>
          </View>
          <View style={{}}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </View>
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
    marginLeft: 70,
    marginRight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipText: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 16,
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
  }
})

export default Login;
