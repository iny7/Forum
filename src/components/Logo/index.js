import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 60
  }
})

export default class Logo extends Component {
  render () {
    const { style } = this.props
    return (
      <View style={[styles.wrapper, style]}>
        <Text style={styles.text}>论坛</Text>
      </View>
    )
  }
}

