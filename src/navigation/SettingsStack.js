import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/Settings';
import HeaderTitle from '../components/HeaderTitle';

const SettingsStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen}
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
