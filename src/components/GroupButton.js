import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const GroupButton = ({params, activeColor, buttons, ...rest}) => {
  return (
    <View style={styles.container}>
      {
        buttons.map((button, index) => {
          return (
            <TouchableOpacity 
              key={index}
              onPress={button.onPress}
              style={{
                flex: 1,
                height: 48,
                backgroundColor: button.activated ? activeColor : '#ffffff',
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={[{color: button.activated ? '#ffffff' : '#000000'}, styles.text]}>{button.text}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    lineHeight: 18
  }
});

export default GroupButton

2