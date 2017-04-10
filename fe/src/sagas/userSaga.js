import { call, put, take } from 'redux-saga/effects'
import * as Api from 'Api'

// 1. 登录或注册
// 2. 根据当前user拿数据, 比如 我的帖子 粉丝等
// 3. 登出

function* signin (user) {
  try {
    const { email, token, msg } = yield call(Api.signin, user)
    if (token) {
      yield put({ type: 'signin:success', payload: { email, token } })
      return token
    } else {
      yield put({ type: 'signin:failed', payload: { error: msg } })
    }
  } catch (e) {
    yield put({ type: 'signin:failed', payload: { error: '???' } })
  }
}

function* signup (user) {
  try {
    const { email, token, msg } = yield call(Api.signup, user)
    if (token) {
      yield put({ type: 'signup:success', payload: { email, token } })
    } else {
      yield put({ type: 'signup:failed', payload: { error: msg } })
    }
  } catch (e) {
    yield put({ type: 'signup:failed', payload: { error: '???' } })
  }
}

export default function* userSaga () {
  while (true) {
    const [ loginUser, signupUser ] = yield [
      take('signin:request'),
      take('signup:request')
    ]
    console.log(loginUser, signupUser)
    // const token = yield call(authorize, user)
    // if (token) {
    //   yield take()
    // }
  }
}
