import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

// 先不删, 后面为Button添加主题, active, disable等props时, 会用到
import defaultStyles from './styles'

const textProps = ['color', 'fontSize']

export default class Button extends Component {
  render () {
    const { style, children, onPress } = this.props
    // 1. 将传入的style对象拍平
    const args = StyleSheet.flatten(style)

    // 2. 将文字相关的属性从传入的style上摘下
    const textStyle = textProps.reduce((prev, item) => {
      args[item] && (prev[item] = args[item])
      delete args[item]
      return prev
    }, {})

    // 3.分别重新设置Button和Text的属性
    const styles = StyleSheet.create({
      btn: args,
      text: textStyle
    })
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[ defaultStyles.btn, styles.btn ]}
        onPress={onPress}>
        <Text style={[ defaultStyles.text, styles.text ]}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}
Button.defaultProps = {
  style: {}
}
