/**
 * 因为两个平台存储方式和登录成功后的行为区别较大, 所以实现authSaga
 * web 用 localStorage + react-router(browserHistory)
 * rn  用 AsyncStorage + RNRF
 **/
import { take } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
// import { replace } from 'react-router-redux'

export default function* authSaga () {
  while (true) {

    // waiting for set token
    const action = yield take('auth:set:token')
    const { user: { email, token } } = action.payload

    // storage token according to platform
    localStorage.setItem('email', email)
    localStorage.setItem('token', token)

    // redirect
    // yield put(replace('/posts'))
    browserHistory.replace('/posts')

    console.log('重定向到帖子列表页')

    // waiting for remove token
    yield take('auth:remove:token')
    localStorage.removeItem('email')
    localStorage.removeItem('token')

    browserHistory.replace('/')
  }
}
