/**
 * 因为两个平台存储方式和登录成功后的行为区别较大, 所以实现authSaga
 * web 用 localStorage + react-router(browserHistory)
 * rn  用 AsyncStorage + RNRF
 **/
import { AsyncStorage } from 'react-native'
import { take, call, put } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'


async function getUser () {
  const id = await AsyncStorage.getItem('userId')
  const email = await AsyncStorage.getItem('email')
  const token = await AsyncStorage.getItem('token')
  return { id: id >> 0, email, token }
}

async function saveUser ({ id, email, token }) {
  await AsyncStorage.setItem('userId', String(id))
  await AsyncStorage.setItem('email', email)
  await AsyncStorage.setItem('token', token)
}

async function removeUser () {
  await AsyncStorage.removeItem('userId')
  await AsyncStorage.removeItem('email')
  await AsyncStorage.removeItem('token')
}

function* localAuth () {
  const user = yield call(getUser)
  if (user.email && user.token) {
    yield put({ type: 'auth:request', payload: { user } })
  } else {
    Actions.home({ type: 'replace' })
    console.log('重定向')
  }
}

export default function* authSaga () {
  while (true) {
    yield call(localAuth)

    // waiting for set token
    const action = yield take('auth:set:token')
    const { user } = action.payload

    // storage token according to platform
    yield call(saveUser, user)

    // redirect
    Actions.main({ type: 'replace' })

    console.log('重定向到帖子列表页')

    // waiting for remove token
    yield take('auth:remove:token')
    yield call(removeUser)

    Actions.home({ type: 'replace' })
  }
}
