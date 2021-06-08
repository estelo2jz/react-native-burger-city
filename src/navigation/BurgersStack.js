import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderMethodScreen from '../screens/burgers/OrderMethod';
import DeliveryAddressScreen from '../screens/burgers/DeliveryAddress';
import DeliveryAddressConfirmedScreen from '../screens/burgers/DeliveryAddressConfirmed';
import MenuScreen from '../screens/burgers/Menu';
import HeaderTitle from '../components/HeaderTitle';

const BurgersStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="OrderMethodScreen">
      <Stack.Screen name="OrderMethodScreen" component={OrderMethodScreen}
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
      <Stack.Screen name="DeliveryAddressScreen" component={DeliveryAddressScreen}
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
      <Stack.Screen name="DeliveryAddressConfirmedScreen" component={DeliveryAddressConfirmedScreen}
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
      <Stack.Screen name="MenuScreen" component={MenuScreen}
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default BurgersStack;
