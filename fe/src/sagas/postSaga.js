import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from 'api'

function* createPost (action) {
  try {
    const post = yield call(Api.createPost, action.payload.post)
    yield [
      put({ type: 'fetching:data:success', payload: { post } })
    ]
  } catch (e) {
    yield put({ type: 'CREATE_POST_SUCCESS' })
  }
}
function* fetchPost (action) {
  try {
    const post = yield call(Api.fetchPost, action.payload.id)
    yield put({ type: 'RECEIVE_POST', payload: { post } })
  } catch (e) {
    yield put({ type: 'fetch:post:failed' })
  }
}
function* fetchPostsByCategory (action) {
  try {
    const posts = yield call(Api.fetchPostsByCategory, action.payload.category)
    console.log(posts)
    yield put({ type: 'RECEIVE_POSTS', payload: { posts } })
    yield put({ type: 'RECEIVE_POSTS', payload: { posts } })
    yield put({ type: 'RECEIVE_POSTS', payload: { posts } })
    yield put({ type: 'RECEIVE_POSTS', payload: { posts } })
  } catch (e) {
    // TODO
    yield put({ type: 'fetch:posts:failed' })
  }
}
function* fetchPostsByUserId (action) {
  try {
    const posts = yield call(Api.fetchPostsByUserId, action.payload.userId)
    yield put({ type: 'fetching:data:success', payload: { posts } })
  } catch (e) {
    yield put({ type: '' })
  }
}

function* watchCreatePost () {
  yield takeLatest('create:post', createPost)
}
function* watchFetchPost () {
  yield takeLatest('fetch:post', fetchPost)
}
function* watchFetchPostByCategory () {
  yield takeLatest('fetch:post:by:category', fetchPostsByCategory)
}
function* watchFetchPostByUserId () {
  yield takeLatest('fetch:post:by:userId', fetchPostsByUserId)
}

export default function* rootSaga () {
  yield [
    watchCreatePost(),
    watchFetchPost(),
    watchFetchPostByCategory(),
    watchFetchPostByUserId()
  ]
}
