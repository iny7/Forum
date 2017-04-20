// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'

// import rootReducer from 'pages/reducers'

import { base, post, user, comment } from 'my-lib/reducers'
import { userSaga, postSaga } from 'my-lib/sagas'
// import routeSaga from './routeSaga'
import authSaga from './authSaga'

const rootReducer = combineReducers({
  base, post, user, comment,
  routing: routerReducer
})


// const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
const historyMiddleware = routerMiddleware(browserHistory)

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, historyMiddleware),
  )
  sagaMiddleware.run(userSaga)
  sagaMiddleware.run(postSaga)
  sagaMiddleware.run(authSaga)
  // sagaMiddleware.run(routeSaga)

  return store
}
