import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // 允许我们 dispatch() 函数
      loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
