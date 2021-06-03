import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BurgersScreen from '../screens/burgers';

const BurgersStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Burgers Screen" component={BurgersScreen} />
    </Stack.Navigator>
  );
};

export default BurgersStack;
