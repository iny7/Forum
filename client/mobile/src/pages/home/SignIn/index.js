import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import IconInput from 'components/IconInput'
import Button from 'components/Button'

import styles from './styles'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'a@a.com',
      password: '12345678'
    }
  }
  handleSignIn = () => {
    const { username, password } = this.state
    const user = {
      email: username,
      password: password
    }
    console.log(this.props.dispatch)
    this.props.dispatch({ type: 'signin:request', payload: { user } })
    // alert(username + ', ' + password)
    // Actions.welcome()
  }
  handleSignUp () {
    Actions.signup({ type: 'replace', direcion: 'horizontal' })
  }
  handleBack () {
    Actions.pop()
  }
  handleUserName = (username) => {
    this.setState({ username })
  }
  handlePassword = (password) => {
    this.setState({ password })
  }
  render () {
    const { username, password } = this.state
    return (
      <View style={styles.container}>
        <Icon name='close' size={20} style={styles.close} onPress={this.handleBack} />
        <Text style={styles.logo}>登录</Text>
        <View style={styles.content}>
          <IconInput
            name="person"
            placeholder="用户名"
            value={username}
            onChange={this.handleUserName}>
          </IconInput>
          <IconInput
            name="lock"
            placeholder="密码"
            value={password}
            secureTextEntry={true}
            onChange={this.handlePassword}>
          </IconInput>
          <Button style={styles.btn} onPress={this.handleSignIn}>登录</Button>
          <View style={styles.bottom}>
            <Text>还没有帐号?</Text>
            <TouchableOpacity style={styles.link} onPress={this.handleSignUp}>
              <Text style={styles.text}>点击注册</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
