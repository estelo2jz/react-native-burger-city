import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Alert, StatusBar } from 'react-native';

import Button from '../components/Button';

import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { id: 1, image: require('../../assets/images/burger1.jpeg') },
        { id: 2, image: require('../../assets/images/burger2.jpeg') },
        { id: 3, image: require('../../assets/images/burger3.jpeg') },
      ]
    };
  }

  _btnClick = () => {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <Swiper
          autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {this.state.slides.map((slide) => {
            return (
              <View key={slide.id}>
                <Image source={slide.image} style={styles.image} />
              </View>
            )
          })}
        </Swiper>
        <View style={styles.darkLayer} />
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/burger128.png')} style={styles.logo} />
          <Text style={styles.title}>Burger Joint</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Waked N Baked Burgers.</Text>
        </View>
        <View style={styles.button}>
          <Button 
            text="Get start here"
            onPress={() => {
              this._btnClick();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginTop: 3,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  logoContainer: {
    width: width,
    position: 'absolute',
    top: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: 130,
    position: 'absolute',
    bottom: 180,
    left: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'MontserratBold',
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '600',
  },
  text: {
    fontFamily: 'MontserratBold',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '600',
  },
  button: {
    width: width,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 81,
  },
  darkLayer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.4,
  }
})

export default Onboarding;
