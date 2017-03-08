import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Left, Body, Title, Button, Icon, Text } from 'native-base'

export default class SignUp extends Component {
  handleSignUp () {
    Actions.signup()
  }
  render () {
    return (
      <Container>

        <Header>
          <Left>
            <Button transparent onPress={Actions.pop}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>注册</Title>
          </Body>
        </Header>

        <Content>
          <Button onPress={this.handleSignUp}><Text>注册</Text></Button>
        </Content>

      </Container>
    )
  }
}
