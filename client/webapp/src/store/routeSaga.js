/**
 * route saga是一个监听器, 负责监听需要进行路由跳转的action(如: 登录 / 登出, 发帖成功)
 * web和rn需分别监听相关的action, 并根据各自的平台做出的不同响应
 * 在本应用中, web需要调用browserHistory, rn需要调用Actions
 **/
import { takeEvery, call } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
// import { replace } from 'react-router-redux'

// function* webRouteHelper ({ payload }) {
//   const { method, url } = payload
//   switch (method) {
//     case 'replace':
//       console.log('接收到 replace')
//       yield put(replace(url))
//   }
// }
function* redirectToPostList (action) {
  const { result: postId } = action.payload
  console.log('创建成功, 重定向到新建的文章: ', postId)
  yield call(browserHistory.replace, `/posts/${postId}`)
}

export default function* routeSaga () {
  yield [
    // watchCreatePost()
    takeEvery('post:create:success', redirectToPostList)
  ]
  // yield takeEvery('route:change', webRouteHelper)
}
