import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Icon from 'react-native-vector-icons/MaterialIcons'

import IconInput from 'components/IconInput'
import Button from 'components/Button'

// import Logo from 'Forum/src/components/Logo'
// import Util from 'Forum/src/utils'

import styles from './styles'

export default class SignUp extends Component {
  handleSignUp () {
    Actions.signin()
  }
  render () {
    return (
      <View style={styles.container}>
        <Icon name='close' size={20} style={styles.close} onPress={this.handleBack} />
        <Text style={styles.logo}>注册</Text>
        <View style={styles.content}>
          <IconInput
            name="tag-faces"
            placeholder="昵称"
            onChange={t => t}>
          </IconInput>
          <IconInput
            name="person"
            placeholder="用户名"
            onChange={t => t}>
          </IconInput>
          <IconInput
            name="lock"
            placeholder="密码"
            onChange={t => t}>
          </IconInput>
          <Button style={styles.btn} onPress={this.handleSignIn}>注册</Button>
          <View style={styles.bottom}>
            <Text>已经有帐号了?</Text>
            <TouchableOpacity style={styles.link} onPress={this.handleSignUp}>
              <Text style={styles.text}>立即登录</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
