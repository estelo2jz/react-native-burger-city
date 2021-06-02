import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

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

  render() {
    return (
      <View style={styles.container}>
        <Swiper 
          autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {this.state.slides.map((slide) => {
            return (
              <View>
                <Image source={slide.image} style={styles.image} />
              </View>
            )
          })}
        </Swiper>
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
  }
})

export default Onboarding;
