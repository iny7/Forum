import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const I18N = {
  posts: '首页',
  // messages: '私信',
  account: '我的'
}
const iconMap = {
  posts: 'home',
  // messages: 'message',
  account: 'person'
}


export default class TabIcon extends Component {
  render () {
    const { selected, sceneKey } = this.props
    const color = selected ? '#F55D54' : '#666'
    const size = sceneKey === 'messages' ? 22 : 24
    return (
      <View style={styles.button}>
        <Icon color={color} size={size} name={iconMap[sceneKey]}></Icon>
        <Text style={[ styles.title, { color } ]}>
          {I18N[sceneKey]}
        </Text>
      </View>
    )
  }
}
