import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import styles from './styles'

export default class MyImage extends Component {
  render () {
    const { size, src, round, children } = this.props
    const prefix = 'http://localhost:3000/'

    const customStyle = StyleSheet.create({
      image: {
        width: size,
        height: size,
        borderRadius: round ? (size / 2) : 0
      },
      text: {
        fontSize: size / 2
      }
    })

    return (
      <View style={styles.wrapper}>
        <Image style={[ styles.image, customStyle.image ]} source={{ uri: prefix + src }}></Image>
        { children && <Text style={[ styles.text, customStyle.text ]}>{children}</Text> }
      </View>
    )
  }
}
MyImage.defaultProps = {
  round: true
}
