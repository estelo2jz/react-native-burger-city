import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BurgersScreen from '../screens/burgers';
import HeaderTitle from '../components/HeaderTitle';

const BurgersStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Burgers" component={BurgersScreen} 
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default BurgersStack;
