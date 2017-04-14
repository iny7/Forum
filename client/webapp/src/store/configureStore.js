// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'

// import rootReducer from 'pages/reducers'

import { post, user } from '../../../__reducers__'
const rootReducer = combineReducers({
  post,
  user,
  routing: routerReducer
})

import userSaga from '../../../__sagas__/userSaga'
import postSaga from '../../../__sagas__/postSaga'

// const loggerMiddleware = createLogger()
const sageMiddleware = createSagaMiddleware()
const historyMiddleware = routerMiddleware(browserHistory)

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(sageMiddleware, historyMiddleware),
  )
  sageMiddleware.run(userSaga)
  sageMiddleware.run(postSaga)

  return store
}
