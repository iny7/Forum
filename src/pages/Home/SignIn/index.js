import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Left, Body, Title, Button, Icon, Text, Form, Item, Input, Label } from 'native-base'

import Logo from 'Forum/src/components/Logo'
import Util from 'Forum/src/utils'

const { width, height } = Util.size

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0'
  },
  content: {
    width: width,
    backgroundColor: 'lightblue',
    paddingTop: 120,
    paddingLeft: 40,
    paddingRight: 40
  },
  close: {
    position: 'absolute',
    width: 40,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    right: 30,
    top: 30,
    zIndex: 1
  },
  item: {
    borderWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 6,
    borderColor: 'green',
    marginBottom: 12
  },
  icon: {
    color: '#999'
  },
  bottom: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tip: {
    fontSize: 14
  },
  signup: {
    fontSize: 14,
    color: '#27364E',
    textDecorationLine: 'underline',
    textDecorationColor: 'red'
  }
}

// TODO 定制full button 的borderRadius为6
export default class SignIn extends Component {
  handleSignIn () {
    Actions.welcome()
  }
  handleSignUp () {
    Actions.signin()
  }
  render () {
    return (
      <Container style={styles.container}>
        <Icon onPress={Actions.pop} name='close' style={styles.close} />
        <Content style={styles.content}>
          <Form style={{backgroundColor: '#fff'}}>
            <Logo />
            <Item regular style={styles.item}>
              <Icon name='happy' style={styles.icon} />
              <Input placeholder='Icon Textbox'/>
            </Item>
            <Item regular style={styles.item}>
              <Icon active name='person' style={styles.icon} />
              <Input placeholder='Icon Textbox'/>
            </Item>
            <Item regular style={styles.item}>
              <Icon active name='lock' style={styles.icon} />
              <Input placeholder='Icon Textbox'/>
            </Item>
            <Button full onPress={this.handleSignUp}><Text>登录</Text></Button>
            <TouchableOpacity style={styles.bottom} onPress={Actions.signup}>
              <Text style={styles.tip}>还没有帐号?</Text>
              <Text style={{...styles.tip, ...styles.signup}}>点击注册</Text>
            </TouchableOpacity>
          </Form>
        </Content>
      </Container>
    )
  }
}
