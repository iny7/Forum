import { call, put, take } from 'redux-saga/effects'
import * as Api from '../api'
import { setUser } from '../utils/myFetch'

// 1. 登录或注册
// 2. 根据当前user拿数据, 比如 我的帖子 粉丝等
// 3. 登出

function* signin (user) {
  try {
    const { id, email, authentication_token: token, msg } = yield call(Api.signin, user)
    if (token) {
      yield put({ type: 'signin:success', payload: { id, email, token } })
      return { id, email, token }
    } else {
      // 有错误信息
      yield put({ type: 'signin:failed', payload: { error: msg } })
    }
  } catch (e) {
    // 网络异常
    yield put({ type: 'signin:failed', payload: { error: '???' } })
  }
}

function* signup (user) {
  try {
    const { id, email, authentication_token: token, msg } = yield call(Api.signup, user)
    if (token) {
      yield put({ type: 'signup:success', payload: { email, token } })
      return { id, email, token }
    } else {
      yield put({ type: 'signup:failed', payload: { error: msg } })
    }
  } catch (e) {
    yield put({ type: 'signup:failed', payload: { error: '???' } })
  }
}

function* logout () {
  try {
    yield call(Api.logout)
  } catch (e) {
    console.error('logout error')
  }
}

export default function* userSaga () {
  while (true) {
    console.log('启动user saga, 等待操作')
    const action = yield take([
      'auth:request',
      'signin:request',
      'signup:request'
    ])
    const { type, payload } = action
    let user
    switch (type) {
      case 'auth:request':
        console.log('从本地读取')
        user = payload.user
        break
      case 'signin:request':
        console.log('server登录')
        user = yield call(signin, payload.user)
        break
      case 'signup:request':
        console.log('server注册')
        user = yield call(signup, payload.user)
        break
    }
    if (user && user.token) {
      console.log(user)
      // TODO 这里可以扩展为: 更通用的memoryStorage.setItem()
      // memoryStorage做为一个util, 是一个单例的js对象, 在saga运行过程中不断被写入
      yield call(setUser, user)
      // 存到store, 必须先更新store再调用authSaga(因为后者中的路由跳转依赖store的状态)
      yield put({ type: 'base:set:currentUser', payload: { user } })
      // 根据平台存到localStorage / AsyncStorage
      yield put({ type: 'auth:set:token', payload: { user } })

      console.log('认证成功, 等待登出')

      yield take('signout:request')

      // 必须先更新store再调用authSaga(因为后者中的路由跳转依赖store的状态)
      yield put({ type: 'base:set:currentUser', payload: { user: undefined }})
      yield put({ type: 'auth:remove:token' })
      // yield call(logout)
      // TODO 登出后, 应清空currentUser (memoryStorage)
    } else {
      console.log('认证失败')
    }
  }
}
