import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import BurgersStack from './BurgersStack';

const TabNavigator = ({ params }) => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack}></Tab.Screen>
      <Tab.Screen name="Burgers" component={BurgersStack}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
