import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Onboarding from './src/screens/Onboarding';

import * as Font from 'expo-font';

const customFonts = {
  'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
}

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  }
  
  useEffect(() => {
    _loadAssetsAsync();
  })

  return (
    <View style={styles.container}>
      { assetsLoaded ? <Onboarding /> : <ActivityIndicator size="small" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
