import React, {useLayoutEffect, useState} from 'react';
import { Text, View, StyleSheet, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../components/Button';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';
import Title from '../../components/Title';


const ConfirmedScreen = ({ navigation, route }) => {

  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => { navigation.navigate('wallet') }} />,
      headerLeft: () => <HeaderBack onPress={() => { navigation.goBack() }} />
    })
  })
  return (
    <View style={styles.container}>
      <View style={styles.addressView}>
        <Title 
          title="Order Confirmed"
          subTitle="Pay by M Wallet"
          titleColor="#FFFFFF"
          subTitleColor="#ff9f1c"
        ></Title>
        <Title
          style={{marginTop: 1}}
          subTitle="22701 - 18 / 09 / 2021 - 429"
          subTitleColor='#FFFFFF'
        ></Title>
      </View>
      <ScrollView style={styles.dateTimeView}>
        <Title
          style={{ marginTop: 1 }}
          title="Delivering By"
          subTitle="18 / 09 / 2021 03:00:00 PM"
          titleColor="#FFFFFF"
          subTitleColor="#ff9f1c"
        ></Title>
        <Title
          style={{ marginTop: -10 }}
          subTitle="4202 Hickory Hills Dr, 212"
          subTitleColor='#FFFFFF'
        ></Title>
        <View style={{marginLeft: 20, marginTop: 40, marginRight: 60, marginBottom: 20}}>
          <Text style={{ fontFamily: 'MontserratBold', fontSize: 15, lineHeight: 20}}>
            We have sent you an email confirmation of your order.
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 40, marginBottom: 30}}>
          <Button style={{ flex: 1, marginRight: 5,}} text="Track your Order" onPress={() => {
            navigation.navigate('track');
          }}></Button>
          <Button style={{ flex: 1, backgroundColor: '#000000', marginLeft: 5}} text="Confirm" onPress={() => {
            setModalVisible(true);
          }}></Button>
        </View>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={{height: 30}}>
              <View style={styles.modalCircle}></View>
            </View>
            <View style={styles.modalView}>
              <View style={styles.modalView2}>
                <Image style={{margin: 20}} source={require('../../../assets/images/cola64.png')} />
                <Text style={styles.modalTitle}>Congratulation!</Text>
                <View style={{marginLeft: 40, marginRight: 40, marginBottom: 20, marginTop: 10}}>
                  <Text style={styles.modalDesc}>Thanks for your payment! You have won a Free Coca-cola.</Text>
                </View>
                <TouchableOpacity style={styles.modalButton} onPress={() => {
                  setModalVisible(false);
                }}>
                  <Text style={styles.textStyle}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    
  },
  addressView: {
    backgroundColor: '#d9d9d9',
    height: 157,
    borderWidth: 1,
    borderColor: "thistle", 
    borderRadius: 50,
    margin: 20,

  },
  dateTimeView: {
    height: 157,
    backgroundColor: '#ffffff',
    color: 'red'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 40,
  },
  modalTitle: {
    color: '#000000',
    fontFamily: 'MontserratBold',
    fontSize: 15,
    lineHeight: 18,
  },
  modalDesc: {
    color: '#1d2126',
    fontFamily: 'MontserratBold',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 100,
    backgroundColor: '#ff9f1c',
    borderRadius: 10,
  },
  textStyle: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
  },
  modalCircle: {
    width: 125,
    height: 125,
    borderRadius: 125,
    backgroundColor: 'white'
  }
})

export default ConfirmedScreen;
