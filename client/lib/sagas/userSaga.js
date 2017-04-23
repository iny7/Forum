import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../api'

function* getProfile (action) {
  const payload = yield call(Api.getProfile, action.payload.userId)
  yield put({ type: 'receive:user', payload })
}

function* getFollowing (action) {
  const payload = yield call(Api.getFollowing, action.payload.userId)
  yield put({ type: 'receive:user', payload })
}

function* getFans (action) {
  const payload = yield call(Api.getFans, action.payload.userId)
  yield put({ type: 'receive:user', payload })
}

function* followUserById (action) {
  // const myId = 
  // const otherId = 
  const payload = yield call(Api.followUserById, action.payload.userId)
  yield put({ type: 'follow:user:byId', payload })
}

function* unfollowUserById (action) {
  console.log('unfollowUserById')
  const payload = yield call(Api.unfollowUserById, action.payload.userId)
  yield put({ type: 'unfollow:user:byId', payload })
}

export default function* userSaga () {
  yield [
    takeLatest('user:get:profile', getProfile),
    takeLatest('user:get:following', getFollowing),
    takeLatest('user:get:fans', getFans),
    takeLatest('follow:user:request', followUserById),
    takeLatest('unfollow:user:request', unfollowUserById),
  ]
}