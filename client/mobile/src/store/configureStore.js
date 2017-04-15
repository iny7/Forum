import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { post, user } from 'my-lib/reducers'
import { userSaga, postSaga } from 'my-lib/sagas'
// import routeSaga from './routeSaga'
import authSaga from './authSaga'

const rootReducer = combineReducers({
  post,
  user,
})

const sagaMiddleware = createSagaMiddleware()

export default function () {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  )

  sagaMiddleware.run(userSaga)
  sagaMiddleware.run(postSaga)
  sagaMiddleware.run(authSaga)

  return store
}