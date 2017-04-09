import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

export default class IconButton extends Component {
  render () {
    const { name, label, style, color, handleClick } = this.props
    return (
      <TouchableOpacity style={[ styles.btn, style ]} onPress={handleClick}>
        <Icon name={name} style={[ styles.icon, { color } ]} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    )
  }
}
