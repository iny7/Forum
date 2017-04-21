import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Router from 'pages'

const store = configureStore()

const MB = {}
global.store = store
global.MB = MB

MB.currentUser = () => {
  const { user } = store.getState().base
  if (user && user.token) {
    return user
  } else {
    console.error('找不到当前用户')
  }
}

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
