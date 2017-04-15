import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { post, user } from 'my-lib/reducers'
import { userSaga, postSaga } from 'my-lib/sagas'
// import routeSaga from './routeSaga'

import Router from 'pages'
// other imports...

const rootReducer = combineReducers({
  post,
  user,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(userSaga)
sagaMiddleware.run(postSaga)

store.dispatch({ type: 'auth:request' })

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
