import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Button, Icon, Text, Form, Item, Input } from 'native-base'

import Logo from 'Forum/src/components/Logo'
import Util from 'Forum/src/utils'

const { width } = Util.size

// TODO 定制full button 的borderRadius为6
export default class SignUp extends Component {
  handleSignUp () {
    alert('注册')
    // Actions.signin()
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
              <Input placeholder='昵称'/>
            </Item>
            <Item regular style={styles.item}>
              <Icon active name='person' style={styles.icon} />
              <Input placeholder='用户名'/>
            </Item>
            <Item regular style={styles.item}>
              <Icon active name='lock' style={styles.icon} />
              <Input placeholder='密码'/>
            </Item>
            <Button full onPress={this.handleSignUp}><Text>注册</Text></Button>
            <TouchableOpacity style={styles.bottom}>
              <Text style={styles.tip}>已经有帐号?</Text>
              <Text
                style={{...styles.tip, ...styles.signup}}
                onPress={() => Actions.signin({type: 'replace', direcion: 'horizontal'})}>
                立即登录
              </Text>
            </TouchableOpacity>
          </Form>
        </Content>
      </Container>
    )
  }
}
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