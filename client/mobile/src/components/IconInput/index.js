import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

export default class IconInput extends Component {
  render () {
    const { name, value, placeholder, secureTextEntry, onChange } = this.props
    return (
      <View style={styles.form}>
        <Icon name={name} style={styles.icon} />
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
        />
      </View>
    )
  }
}
