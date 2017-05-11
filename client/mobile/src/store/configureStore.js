import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { base, post, user, comment } from 'my-lib/reducers'

import { signSaga, userSaga, postSaga } from 'my-lib/sagas'
import routeSaga from './routeSaga'
import authSaga from './authSaga'

const rootReducer = combineReducers({
  base, post, user, comment
})

const sagaMiddleware = createSagaMiddleware()

export default function () {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  )

  // common sagas
  sagaMiddleware.run(signSaga)
  sagaMiddleware.run(userSaga)
  sagaMiddleware.run(postSaga)

  // private sagas
  sagaMiddleware.run(authSaga)
  sagaMiddleware.run(routeSaga)

  return store
}
