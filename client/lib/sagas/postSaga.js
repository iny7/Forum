import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../api'

function* createPost (action) {
  try {
    const payload = yield call(Api.createPost, action.payload.post)
    yield put({ type: 'post:create:success', payload })
  } catch (e) {
    console.error(e)
    yield put({ type: 'CREATE_POST_SUCCESS' })
  }
}
function* fetchPostById (action) {
  try {
    const payload = yield call(Api.fetchPostById, action.payload.id)
    yield put({ type: 'receive:post', payload })
  } catch (e) {
    console.error(e)
    yield put({ type: 'fetch:post:failed' })
  }
}
function* fetchPostsByCategory (action) {
  try {
    const payload = yield call(Api.fetchPostsByCategory, action.payload.category)
    console.log(payload)
    yield put({ type: 'receive:posts', payload })
  } catch (e) {
    // TODO
    yield put({ type: 'fetch:posts:failed' })
  }
}
function* fetchPostsByUserId (action) {
  try {
    const payload = yield call(Api.fetchPostsByUserId, action.payload.userId)
    yield put({ type: 'receive:posts', payload })
  } catch (e) {
    console.error(e)
    yield put({ type: '' })
  }
}
function* addCommentToPost (action) {
  try {
    const { post, comment } = action.payload
    const payload = yield call(Api.addCommentToPost, post.id, comment)
    yield put({ type: 'receive:comment', payload })
  } catch (e) {
    console.error(e)
  }
}

function* watchCreatePost () {
  yield takeLatest('create:post', createPost)
}
function* watchFetchPost () {
  yield takeLatest('fetch:post:by:id', fetchPostById)
}
function* watchFetchPostByCategory () {
  yield takeLatest('fetch:post:by:category', fetchPostsByCategory)
}
function* watchFetchPostByUserId () {
  yield takeLatest('fetch:post:by:userId', fetchPostsByUserId)
}
function* watchAddCommentToPost () {
  yield takeLatest('post:add:comment:request', addCommentToPost)
}

export default function* rootSaga () {
  console.log('start all sagas')
  yield [
    watchCreatePost(),
    watchFetchPost(),
    watchFetchPostByCategory(),
    watchFetchPostByUserId(),
    watchAddCommentToPost()
  ]
  console.log('fuck sagas')
}
