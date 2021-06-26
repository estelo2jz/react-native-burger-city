import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createSwitchNavigator} from '@react-navigation/compat';
import TabNavigator from './src/navigation/TabNavigator';

import Onboarding from './src/screens/Onboarding';
import Login from './src/screens/Login';
import ForgetPassword from './src/screens/ForgetPassword';
import Otp from './src/screens/Otp';
import MobileNumber from './src/screens/MobileNumber';
import SettingsStack from './src/navigation/SettingsStack';

import HomeScreen from './src/screens/home';

import * as Font from 'expo-font';

const customFonts = {
  'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
}

const AppNavigator = createSwitchNavigator({
  Onboarding: { screen: Onboarding },
  Login: {screen:Login},
  ForgetPassword: {screen:ForgetPassword},
  Otp: {screen:Otp},
  MobileNumber: { screen: MobileNumber },
  Settings: SettingsStack,
  Home: TabNavigator
}, {
  initialRouteName: 'Onboarding'
})

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  }

  useEffect(() => {
    _loadAssetsAsync();
  })

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar />
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  );

  // return (
  //   <View style={styles.container}>
  //     { assetsLoaded ? <Login /> : <ActivityIndicator size="small" />}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
