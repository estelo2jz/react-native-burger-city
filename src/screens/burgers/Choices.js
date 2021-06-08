import React, {useLayoutEffect, useState} from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Background from '../../components/Background';
import HeaderRight from '../../components/HeaderRight';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import Title from '../../components/Title';
import Cell from '../../components/Cell';
import Button from '../../components/Button';
import DeliveryAddress from './DeliveryAddress';

const choices = [
  {
    id: 1,
    name: 'Homestyle Fries',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 2,
    name: 'Medium Fries',
    selected: true,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
]

const Choices = ({ navigation, route }) => {

  const [data, setData] = useState(choices);

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
    let temp = [];
    data.map((entry, idx) => {
      if (idx ===index) {
        entry.selected = true;
        temp.push(entry);
      } else {
        entry.selected = false;
        temp.push(entry)
      }
    });
    setData(temp);
  }

  return (
    <Background>
      <View style={styles.container}>
        <Title title='Order Method' subTitle="Please select your order Choices" />
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
        </View>
        <View style={{ marginLeft: 50, marginRight: 20, marginTop: 40 }}>
          <Button text="Proceed to Add Cart" onPress={() => Alert.alert("added to cart")} />
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

export default Choices;