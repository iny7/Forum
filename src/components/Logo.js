import React, { Component } from 'react'
import { Text } from 'native-base'

const style = {
  fontSize: 60,
  padding: 20,
  paddingBottom: 40,
  
  textAlign: 'center'
}
export default class Logo extends Component {
  render () {
    return <Text style={style}>论坛</Text>
  }
}

