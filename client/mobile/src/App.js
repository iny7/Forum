import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Router from 'pages'

const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
