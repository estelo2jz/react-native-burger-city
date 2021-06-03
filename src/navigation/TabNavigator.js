import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import BurgersStack from './BurgersStack';
import FavouritesStack from './FavouritesStack';
import TrackStack from './TrackStack';
import WalletStack from './WalletStack';

const TabNavigator = ({ params }) => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName = 'HomeStack'>
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused 
                ? require('../../assets/images/home-active.png') 
                : require('../../assets/images/home24.png')
              }
            >
            </Image>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Burgers" 
        component={BurgersStack}
        options={{
          tabBarLabel: 'Our Burgers',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/burger-active.png')
                  : require('../../assets/images/burger24.png')
              }
            >
            </Image>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="favourites" component={FavouritesStack}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/heart-active.png')
                  : require('../../assets/images/heart24.png')
              }
            >
            </Image>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="track" component={TrackStack}
        options={{
          tabBarLabel: 'Track',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/tracking-active.png')
                  : require('../../assets/images/tracking24.png')
              }
            >
            </Image>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="wallet" component={WalletStack}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/wallet-active.png')
                  : require('../../assets/images/wallet24.png')
              }
            >
            </Image>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
