import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import HeaderTitle from '../components/HeaderTitle';

const HomeStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerTitle: props => <HeaderTitle />}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
