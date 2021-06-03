import React, {useLayoutEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderRight from '../../components/HeaderRight';

const TrackScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />
    })
  })
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 250,
          height: 100,
          backgroundColor: '#000000',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Text style={{ color: '#ff9f1c', fontSize: 22 }}>Track Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TrackScreen;
