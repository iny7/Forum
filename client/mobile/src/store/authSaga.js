/**
 * 因为两个平台存储方式和登录成功后的行为区别较大, 所以实现authSaga
 * web 用 localStorage + react-router(browserHistory)
 * rn  用 AsyncStorage + RNRF
 **/
import { AsyncStorage } from 'react-native'
import { take, call, put } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'

async function setToken (email, token) {
  await AsyncStorage.setItem('email', email)
  await AsyncStorage.setItem('token', token)
}

async function removeToken () {
  await AsyncStorage.removeItem('email')
  await AsyncStorage.removeItem('token')
}

async function getToken () {
  const email = await AsyncStorage.getItem('email')
  const token = await AsyncStorage.getItem('token')
  return { email, token }
}

function* localAuth () {
  const user = yield call(getToken)
  yield put({ type: 'auth:request', payload: { user } })
}

export default function* authSaga () {
  while (true) {
    yield call(localAuth)

    console.log('localAuth')

    // waiting for set token
    const action = yield take('auth:set:token')
    const { user: { email, token } } = action.payload

    console.log(email, token)

    // storage token according to platform
    yield call(setToken, email, token)

    // redirect
    Actions.main({ type: 'replace' })

    console.log('重定向到帖子列表页')

    // waiting for remove token
    yield take('auth:remove:token')
    yield call(removeToken)

    Actions.home({ type: 'replace' })
  }
}
