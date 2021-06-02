import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

const Login = ({params}) => {
  return (
    <View style={styles.container}>
      {/* <Text>Hello</Text> */}
      <ImageBackground
        source={require('../../assets/images/burger1.jpeg')}
        style={{width: width, height: height}}
      >

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Login;
