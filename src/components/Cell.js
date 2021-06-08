import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Cell = ({params, style, data, renderItem, onPress, icon}) => {
  return data ? (
    data.map((entry, index) => {
      return (
        <TouchableOpacity key={index} style={styles.container} onPress={() => onPress(entry, index)} >
          <View style={styles.leftView}>
            {renderItem(entry, index)}
          </View>
          <View style={styles.rightView}>
            <Image source={entry.selected ? entry.activeIcon : entry.icon} />
          </View>
        </TouchableOpacity>
      )
    })
  ) : (
    <View />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftView: {
    marginLeft: 20,
  },
  rightView: {
    marginRight: 20,
  }
});

export default Cell