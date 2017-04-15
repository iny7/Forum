import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Router from 'pages'

const store = configureStore()

async function localAuth () {
  const email = await AsyncStorage.getItem('email')
  const token = await AsyncStorage.getItem('token')
  const user = {
    email, token
  }
  store.dispatch({ type: 'auth:request', payload: { user } })
}
localAuth()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
