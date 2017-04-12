import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Text } from 'native-base'

import source from 'images/qcx.jpg'
const styles = {
  content: {
    backgroundColor: 'white'
  }
}

export default class Message extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          {[1, 2, 3, 4, 5].map((item, i) => {
            return (
              <ListItem key={i} avatar>
                <Left>
                  <Thumbnail source={source} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            )
          })}
        </Content>
      </Container>
    )
  }
}
