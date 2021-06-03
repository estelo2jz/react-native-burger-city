import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentScreen from '../screens/wallet/Payment';
import ConfirmedScreen from '../screens/wallet/Confirmed';
import SuccessScreen from '../screens/wallet/Success';
import HeaderTitle from '../components/HeaderTitle';


const WalletStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName = "Payment"
    >
      <Stack.Screen name="Payment" component={PaymentScreen} 
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
      <Stack.Screen name="Confirmed" component={ConfirmedScreen} 
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
      <Stack.Screen name="Success" component={SuccessScreen} 
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default WalletStack;
