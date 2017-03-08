import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Grid, Row, Content, Button, Text,  H1 } from 'native-base'

import Logo from 'Forum/src/components/Logo'

import Util from 'Forum/src/utils'

export default class Welcome extends Component {
  handleSignIn () {
    Actions.signin()
  }
  handleSignUp () {
    Actions.signup()
  }
  render () {
    const { width, height } = Util.size
    return (
      <Container>
        <Content style={{backgroundColor: 'red'}}>
          <View style={{height, padding: 20, paddingTop: 120, backgroundColor: 'green'}}>
            <Logo />
            <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'flex-end'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button full onPress={this.handleSignUp}><Text>注册</Text></Button>
                <Button full onPress={this.handleSignIn}><Text>登录</Text></Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
