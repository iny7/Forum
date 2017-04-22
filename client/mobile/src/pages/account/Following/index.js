import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Following extends Component {
  componentWillMount () {
    const { dispatch, userId, following } = this.props
    dispatch({ type: 'user:get:following', payload: { userId } })
  }
  render () {
    return (
      <View><Text>'Following'</Text></View>
    )
  }
}

const styles = StyleSheet.create({

})
