import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Button from 'components/Button'

import Logo from 'components/Logo'
import back from 'images/back.png'

import styles from './styles'

export default class Welcome extends Component {
  handleSignIn () {
    Actions.signin()
  }
  handleSignUp () {
    Actions.signup()
  }
  render () {
    return (
      <View style={styles.page}>
        <Image source={back} style={styles.bg} />
        <Logo style={styles.logo}/>
        <View style={styles.footer}>
          <Button style={[ styles.btn, styles.signup ]}
            onPress={this.handleSignUp}>
            注册
          </Button>
          <Button style={[ styles.btn, styles.signin ]}
            onPress={this.handleSignIn}>
            登录
          </Button>
        </View>
      </View>
    )
  }
}
