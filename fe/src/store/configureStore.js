// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'pages/reducers'
import rootSaga from 'sagas/rootSaga'

// const loggerMiddleware = createLogger()
const sageMiddleware = createSagaMiddleware()

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(sageMiddleware)
  )
  sageMiddleware.run(rootSaga)

  return store
}
