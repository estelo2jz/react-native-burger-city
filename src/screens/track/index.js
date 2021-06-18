import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import haversine from 'haversine';

import Button from '../../components/Button';

import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import carImage from '../../../assets/images/car64.png';

// const {width, height} = Dimensions.get('window');

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78817;
const LONGITUDE = -122.3903973;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const TARGET_LATITUDE = 37.7861862;
const TARGET_LONGITUDE = -122.3897073;
const TARGET_COORDINATE = {
  latitude: TARGET_LATITUDE,
  longitude: TARGET_LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

export default class NavigationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPos: null,
      curPos: { latitude: LATITUDE, longitude: LONGITUDE },
      curAng: 45,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      initialRegion: {
        latitude: LATITUDE - 0.001,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      carRot: '45deg',
      carStep1: 0,
      carStep2: 0,
      routeCoordinates: [],
      distance: 0.56,
      modalVisible: false
    };
    this.changePosition = this.changePosition.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  // use the timer to simulate the navigation
  simulationNavigation() {
    this.interval = setInterval(() => {
      this.changePosition(-0.0001 / 10, -0.00012 / 10)
      this.setState({carStep1: this.state.carStep1 + 1});

      if (this.state.carStep1 === 70) {
        clearInterval(this.interval);
        this.setState({carStep1: 0})
      }
    }, 100)

    //  turn left then
    this.interval2 = setInterval(() => {
      this.setState({ carStep2: this.state.carStep2 + 1 });

      if (this.state.carStep2 >= 90) {
         // turn left
        this.setState({carRot: '-40deg'})
        this.changePosition(-0.0001 / 10, +0.000135 / 10)
      }

      if (this.state.carStep2 === 200) {
        clearInterval(this.interval2);
        this.setState({ carStep2: 0 })
        this.setState({modalVisible: true})
      }
    }, 100)
  }

  calcDistance = (newLatLng) => {
      const {prevPos} = this.state;
      return prevPos ? haversine( prevPos, newLatLng) : 0;
  }

  changePosition(latOffset, lonOffset) {
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState({
      prevPos: this.state.curPos,
      curPos: { latitude, longitude },
      routeCoordinates: this.state.routeCoordinates.concat([{ latitude, longitude }]),
      distance: this.state.distance - this.calcDistance({latitude, longitude}),
    });
    // this.updateMap();
  }

  getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }
    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  updateMap() {
    const { curPos, prevPos, curAng } = this.state;
    const curRot = this.getRotation(prevPos, curPos);
    this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
  }

  render() {
    return (
      <View style={styles.flex}>
        <MapView
        provider={PROVIDER_GOOGLE}
          ref={el => (this.map = el)}
          style={styles.flex}
          minZoomLevel={15}
          initialRegion={{
            ...this.state.initialRegion
          }}
        >
          <MapView.Marker
            coordinate={this.state.curPos}
            anchor={{ x: 0.28, y: 0.5 }}
          >
            <Image source={require("../../../assets/images/car2-64.png")} style={{transform: [{rotate: this.state.carRot}]}} />
          </MapView.Marker>
          <Marker
            coordinate={TARGET_COORDINATE}
          >
            <Image source={require("../../../assets/images/location32.png")} />
          </Marker>
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={8} strokeColor={'#ff9f1c'} />
        </MapView>
        <View style={styles.buttonContainerLeftRight}>


          {/* <TouchableOpacity
            style={[styles.button, styles.up]}
            onPress={() => this.changePosition(0.0001, 0)}
          >
            <Text>+ Lat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.down]}
            onPress={() => this.changePosition(-0.0001, 0)}
          >
            <Text>- Lat</Text>
          </TouchableOpacity> */}


          {/* <TouchableOpacity
            style={[styles.button, styles.left]}
            onPress={() => this.changePosition(0, -0.0001)}
          >
            <Text>- Lon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.right]}
            onPress={() => this.changePosition(0, 0.0001)}
          >
            <Text>+ Lon</Text>
          </TouchableOpacity> */}
        </View>

        <View style={styles.buttonContainerUpDown}>
          <View style={{ 
            height: 48, 
            flex: 1, 
            justifyContent: 'center', 
            marginLeft: 20, 
            marginRight: 20, 
            marginTop: 20,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff'
          }}>
            <Text style={{ fontFamily: 'MontserratBold', fontSize: 18, color: 'orange'}}>
              {parseFloat(this.state.distance).toFixed(2) > 0? parseFloat(this.state.distance).toFixed(2) : 0 } km
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainerUpDown}>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginLeft: 55, marginRight: 20, marginBottom: 20 }}>
            <Button text="Track Your Order" onPress={() => {this.simulationNavigation()}}></Button>
          </View>

          {/* <TouchableOpacity
            style={[styles.button, styles.up]}
            onPress={() => this.changePosition(0.0001, 0)}
          >
            <Text>+ Lat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.down]}
            onPress={() => this.changePosition(-0.0001, 0)}
          >
            <Text>- Lat</Text>
          </TouchableOpacity> */}
        </View>
        <Modal visible={this.state.modalVisible} animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={{ height: 30 }}>
              <View style={styles.modalCircle}></View>
            </View>
            <View style={styles.modalView}>
              <View style={styles.modalView2}>
                <Image style={{ margin: 20 }} source={require('../../../assets/images/burger24.png')} />
                <Text style={styles.modalTitle}>Your Burger has arrived!</Text>
                <View style={{ marginLeft: 40, marginRight: 40, marginBottom: 20, marginTop: 10 }}>
                  <Text style={styles.modalDesc}>Thanks for choosing Burger-Joint, Your 420 friendly Joint</Text>
                </View>
                <TouchableOpacity style={styles.modalButton} onPress={() => {
                  this.setState({modalVisible: false});
                }}>
                  <Text style={styles.textStyle}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
  },
  buttonContainerUpDown: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainerLeftRight: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  up: {
    alignSelf: 'flex-start',
  },
  down: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
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
    shadowOffset: { width: 0, height: 2 },
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
    marginTop: 20,
    color: '#ff9f1c',
    fontFamily: 'MontserratBold',
    fontSize: 15,
    lineHeight: 18,
  },
  modalDesc: {
    color: '#1d2126',
    fontFamily: 'MontserratBold',
    fontSize: 18,
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
});