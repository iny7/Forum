// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'pages/reducers'

import userSaga from 'sagas/userSaga'
import postSaga from 'sagas/postSaga'

// const loggerMiddleware = createLogger()
const sageMiddleware = createSagaMiddleware()

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(sageMiddleware),
  )
  sageMiddleware.run(userSaga)
  sageMiddleware.run(postSaga)

  return store
}
