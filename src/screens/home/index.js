import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';

import HeaderRight from '../../components/HeaderRight';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Coupon from '../../components/Coupon';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => (<HeaderLanguageChange onPress={() => (Alert.alert('Do something'))} />)
    })
  })

  const slides = [
    { id: 1, image: require('../../../assets/images/burger/burger1.jpeg') },
    { id: 2, image: require('../../../assets/images/burger/burger2.jpeg') },
    { id: 3, image: require('../../../assets/images/burger/burger3.jpeg') },
    { id: 4, image: require('../../../assets/images/burger/burger4.jpeg') },
    { id: 5, image: require('../../../assets/images/burger/burger5.jpeg') },
  ]

  const coupons = [
    {
      id: 1,
      icon: require('../../../assets/images/burger24logo.png'),
      title: 'Order Here',
      desc: 'Login to continue Burger Joint'
    },
    {
      id: 2,
      icon: require('../../../assets/images/burger24logo.png'),
      title: 'Track Here',
      desc: 'Login to continue Burger Joint'
    },
  ]

  const offers = [
    { id: 1, image: require("../../../assets/images/burger/card1.jpeg") },
    { id: 2, image: require("../../../assets/images/burger/card2.jpeg") },
    { id: 3, image: require("../../../assets/images/burger/card3.jpeg") },
    { id: 4, image: require("../../../assets/images/burger/card4.jpeg") },
    { id: 5, image: require("../../../assets/images/burger/card5.jpeg") },
    { id: 6, image: require("../../../assets/images/burger/card6.jpeg") },
    { id: 7, image: require("../../../assets/images/burger/card7.jpeg") },
    { id: 8, image: require("../../../assets/images/burger/card8.jpeg") },
    { id: 9, image: require("../../../assets/images/burger/card9.jpeg") },
    { id: 10, image: require("../../../assets/images/burger/ccard10.jpeg") },

  ]

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.image} />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ width: width, height: 241 }}>
        <Swiper
          autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {
            slides.map((slide) => {
              return (
                <View key={slide.id} style={styles.slide}>
                  <Image
                    source={slide.image}
                    style={styles.image}
                  />
                  <View style={styles.slide_text_wrapper}>
                    <Text style={styles.slide_text}>Waked N Baked Burger's</Text>
                  </View>
                </View>
              )
            })
          }
        </Swiper>
      </View>
      <View style={{ marginTop: 10 }}>
        {
          coupons.map((coupon) => {
            return (
              <Coupon
                key={coupon.id}
                icon={coupon.icon}
                title={coupon.title}
                desc={coupon.desc}
              />
            )
          })
        }
      </View>
      <View style={{ marginTop: 22, marginLeft: 20, height: 200 }}>
        <Text style={{ fontFamily: 'MontserratBold', fontSize: 20 }}>Best Offers</Text>
        <Carousel
          firstItem={1}
          data={offers}
          renderItem={_renderItem}
          sliderWidth={width}
          sliderHeight={120}
          itemWidth={width}
          itemHeight={120}
        >

        </Carousel>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // will put in the center of the page x
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    width: width,
    height: 241,
  },
  slide: {
    width: width,
    height: 241,
  },
  slide_text_wrapper: {
    position: 'relative',
    bottom: 215,
    right: -20,
    width: width - 100,
  },
  slide_text: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 28,
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
})

export default HomeScreen;
