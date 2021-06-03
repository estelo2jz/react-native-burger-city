import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderMethodScreen from '../screens/burgers/OrderMethod';
import HeaderTitle from '../components/HeaderTitle';

const BurgersStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="OrderMethodScreen" component={OrderMethodScreen}
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default BurgersStack;
