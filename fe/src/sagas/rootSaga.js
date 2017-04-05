import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from 'api/index'

function* fetchPosts (action) {
  try {
    const posts = yield call(Api.fetchPosts)
    yield put({ type: 'RECEIVE_POSTS', payload: { posts } })
  } catch (e) {
    // TODO
    yield put({ type: 'fetch:posts:failed' })
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
function* createPost (action) {
  try {
    const post = yield call(Api.createPost, action.payload.post)
    yield put({ type: 'fetching:data:success', payload: { post } })
  } catch (e) {
    yield put({ type: 'CREATE_POST_SUCCESS' })
  }
}

function* fetchPostsSaga () {
  yield takeLatest('fetch:posts', fetchPosts)
}
function* fetchPostSaga () {
  yield takeLatest('fetch:post', fetchPost)
}
function* createPostSaga () {
  yield takeLatest('create:post', createPost)
}

export default function* rootSaga () {
  yield [
    fetchPostsSaga(),
    fetchPostSaga(),
    createPostSaga()
  ]
}
