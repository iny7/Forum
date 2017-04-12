import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
// other imports...

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */]
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)

import Router from 'pages'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
