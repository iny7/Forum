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
function* likePost (action) {
  try {
    const { post } = action.payload
    const payload = yield call(Api.likePost, post.id)
    yield put({ type: 'list:post:success', payload })
  } catch (e) {
    console.error(e)
  }
}
function* unlikePost (action) {
  try {
    const { post } = action.payload
    const payload = yield call(Api.unlikePost, post.id)
    yield put({ type: 'unlike:post:success', payload })
  } catch (e) {
    console.error(e)
  }
}

export default function* rootSaga () {
  yield [
    takeLatest('create:post', createPost),
    takeLatest('fetch:post:by:id', fetchPostById),
    takeLatest('fetch:post:by:category', fetchPostsByCategory),
    takeLatest('fetch:post:by:userId', fetchPostsByUserId),
    takeLatest('post:add:comment:request', addCommentToPost),
    takeLatest('like:post', likePost),
    takeLatest('unlike:post', unlikePost),
  ]
}
