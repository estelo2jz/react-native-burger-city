import React, {useLayoutEffect, useState} from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight'; 
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Title from '../../components/Title';
import Cell from '../../components/Cell';

const methods = [
  {
    id: 1,
    name: 'In-Store',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 2,
    name: 'Delevery',
    selected: true,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 3,
    name: 'Drive Thru',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
]

const OrderMethod = ({ navigation, route }) => {

  const [data, setData] = useState(methods);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => (<HeaderLanguageChange onPress={() => (Alert.alert('Do something'))} />)
    })
  })

  const _renderItem=(item, index) => {
    return (
      <Text 
        key={item.id}
        style={{ 
          fontFamily: 'MontserratBold',
          fontSize: 15,
          lineHeight: 20,
         }}
      >
        {item.name}
      </Text>
    )
  }

  const _onItemClick = (item, index) => {
    Alert.alert(index);
  }

  return (
    <Background>
      <View style={styles.container}>
        <Title title='Hello' subTitle="Please select your method" />
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
          <Cell />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default OrderMethod;
