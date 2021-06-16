import React, {useLayoutEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Background from '../../components/Background';
import Title from '../../components/Title';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

const methods = [
  {
    id: 1,
    name: 'M Wallet',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 2,
    name: 'Cash on Delivery',
    selected: true,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 3,
    name: 'Apple Pay',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
  {
    id: 3,
    name: 'Samsung Pay',
    selected: false,
    icon: require('../../../assets/images/tick16.png'),
    activeIcon: require('../../../assets/images/tick-active.png'),
  },
]

const PaymentScreen = ({ navigation, route }) => {

  const [data, setData] = useState(methods);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => <HeaderBack onPress={() => { navigation.goBack() }} />
    })
  })

  const _renderItem = (item, index) => {
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
      if (idx === index) {
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

      <View style={styles.container}>
        <Title title='Order Payment' />
        <View style={{ marginTop: 8 }}>
          <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
        </View>
        <View style={{ marginLeft: 50, marginRight: 20, marginTop: 100 }}>
          <Button text="Confirm" onPress={() => navigation.push('Confirmed')} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default PaymentScreen;
