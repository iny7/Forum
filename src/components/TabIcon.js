import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const I18N = {
  posts: '首页',
  messages: '私信',
  account: '我的'
}

const iconMap = {
  posts: 'home',
  messages: 'commenting',
  account: 'user'
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center'
  }
})

export default function TabIcon ({ selected, sceneKey }) {
  return (
    <View style={styles.button}>
      <Icon color={selected ? 'red' : 'black'} size={20} name={iconMap[sceneKey]}></Icon>
      <Text style={{ color: selected ? 'red' : 'black' }}>
        {I18N[sceneKey]}
      </Text>
    </View>
  )
}

TabIcon.propTypes = {
  selected: PropTypes.bool,
  sceneKey: PropTypes.string,
  title: PropTypes.string,
}
