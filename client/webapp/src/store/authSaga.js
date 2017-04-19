/**
 * 因为两个平台存储方式和登录成功后的行为区别较大, 所以实现authSaga
 * web 用 localStorage + react-router(browserHistory)
 * rn  用 AsyncStorage + RNRF
 **/
import { take, call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
// import { replace } from 'react-router-redux'

function* localAuth () {
  const email = localStorage.getItem('email')
  const token = localStorage.getItem('token')
  if (email && token) {
    console.log('呵呵')
    yield put({ type: 'auth:request', payload: { user: { email, token } } })
  } else {
    console.log('重定向')
    // TODO 不应该在这里重定向, 因为这里拿不到route的nested关系
    // 例如: 当请求登录页 /signin 时, 本不需要redirect, 但这行代码仍旧会导致
    // 路由的归路由, store的归store, 他们中间用subscribe通信, 而不要直接操作
    // browserHistory.replace('/')
  }
}

export default function* authSaga () {
  while (true) {
    yield call(localAuth)
    // waiting for set token
    const action = yield take('auth:set:token')
    const { user: { email, token } } = action.payload

    // storage token according to platform
    localStorage.setItem('email', email)
    localStorage.setItem('token', token)
    yield put({ type: 'base:set:loggedIn', payload: { loggedIn: true } })

    // redirect
    const { state, pathname } = browserHistory.getCurrentLocation()
    const arr = ['/', '/users/sign_in', '/users/sign_up']
    if (state && state.nextPathname) {
      browserHistory.replace(state.nextPathname)
    } else if (arr.indexOf(pathname) !== -1) {
      browserHistory.replace('/posts')
    }

    console.log('重定向到帖子列表页')

    // waiting for remove token
    yield take('auth:remove:token')
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    yield put({ type: 'base:set:loggedIn', payload: { loggedIn: false } })

    browserHistory.replace('/')
  }
}
