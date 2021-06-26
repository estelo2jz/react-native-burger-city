import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FavouritesScreen from '../screens/favourites';
import SelectItemScreen from '../screens/burgers/SelectItem';
import HeaderTitle from '../components/HeaderTitle';


const FavouritesStack = ({ params }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={FavouritesScreen} 
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
      <Stack.Screen name="SelectItemScreen" component={SelectItemScreen}
        options={{ headerTitle: props => <HeaderTitle /> }}
      />
    </Stack.Navigator>
  );
};

export default FavouritesStack;
