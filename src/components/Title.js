import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({ title, subTitle, style, props }) => {
  return (
    <View style={styles.title}>
      {title ? <Text style={styles.titleText}>{title}</Text> : <View />}
      {subTitle ? <Text style={styles.subTitleText}>{subTitle}</Text> : <View />}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginTop: 28,
  },
  titleText: {
    fontFamily: 'MontserratBold',
    color: '#000000',
    fontSize: 20,
    lineHeight: 27,
  },
  subTitleText: {
    fontFamily: 'MontserratBold',
    color: '#000000',
    fontSize: 15,
    lineHeight: 28,
  }
});

export default Title

